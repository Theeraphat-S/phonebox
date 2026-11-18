using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace PhoneBox.Agent;

/// <summary>Only repairs exact known ANSI-decoded forms of the affected default icons.</summary>
internal static class IconText
{
    private static readonly Dictionary<string, string> Repairs = BuildRepairs();
    public static string Repair(string? value) => value is not null && Repairs.TryGetValue(value, out var icon) ? icon : value ?? "";

    // The emoji the default shortcuts shipped with up to 0.9.17, by shortcut id (Windows, Linux and macOS defaults),
    // and the icon that replaced each one. Only that exact pair is upgraded: an emoji a user chose for any other
    // shortcut is left as it is.
    private static readonly Dictionary<(string Id, string Emoji), string> OldDefaults = new()
    {
        [("terminal", "⌨️")] = "icon:terminal",
        [("explorer", "📁")] = "icon:folder",
        [("files", "📁")] = "icon:folder",
        [("vscode", "📝")] = "icon:code",
        [("browser", "🌐")] = "icon:globe",
        [("spotify", "🎧")] = "icon:headphones",
        [("calc", "🧮")] = "icon:calculator",
        [("settings", "⚙️")] = "icon:settings",
        [("snip", "✂️")] = "icon:scissors",
        [("taskmgr", "📊")] = "icon:column-chart",
        [("monitor", "📊")] = "icon:column-chart",
        [("mute", "🔇")] = "icon:volume-off",
        [("monitoroff", "🌙")] = "icon:moon",
        [("lock", "🔒")] = "icon:lock",
    };

    /// <summary>A default shortcut that still has its old default emoji gets the icon the defaults use now.</summary>
    public static string UpgradeDefault(string id, string icon) => OldDefaults.TryGetValue((id, icon), out var name) ? name : icon;

    private static Dictionary<string, string> BuildRepairs()
    {
        var result = new Dictionary<string, string>(StringComparer.Ordinal);
        // Undefined Windows-1252 bytes keep their C1 values, as in Windows ANSI decoding.
        const string c1 = "\u20ac\u0081\u201a\u0192\u201e\u2026\u2020\u2021\u02c6\u2030\u0160\u2039\u0152\u008d\u017d\u008f\u0090\u2018\u2019\u201c\u201d\u2022\u2013\u2014\u02dc\u2122\u0161\u203a\u0153\u009d\u017e\u0178";
        foreach (var icon in new[] { "\u2328\ufe0f", "\u2699\ufe0f", "\u2702\ufe0f", "\u2733\ufe0f" })
        {
            var forms = new[] { icon, icon[..1] }.ToHashSet(StringComparer.Ordinal);
            for (var pass = 0; pass < 2; pass++)
            {
                var next = new HashSet<string>(StringComparer.Ordinal);
                foreach (var form in forms)
                {
                    var bytes = Encoding.UTF8.GetBytes(form);
                    next.Add(Encoding.Latin1.GetString(bytes));
                    next.Add(new string(bytes.Select(b => b is >= 0x80 and <= 0x9f ? c1[b - 0x80] : (char)b).ToArray()));
                }
                foreach (var broken in next) result[broken] = icon;
                forms = next;
            }
        }
        return result;
    }
}

/// <summary>Escape icon values even when surrounding user text is saved as readable UTF-8.</summary>
public sealed class IconJsonConverter : JsonConverter<string>
{
    public override string? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options) => reader.GetString();
    public override void Write(Utf8JsonWriter writer, string value, JsonSerializerOptions options) =>
        writer.WriteStringValue(JsonEncodedText.Encode(value, JavaScriptEncoder.Default));
}
