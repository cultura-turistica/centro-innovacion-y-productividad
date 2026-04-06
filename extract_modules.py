import re

with open('/Users/cultur/.gemini/antigravity/scratch/capacitacion-cip/curso1.html', 'r', encoding='utf-8') as f:
    content = f.read()

def extract_module(title, start_marker, end_marker, mod_id, theme):
    try:
        html_part = content.split(start_marker)[1].split(end_marker)[0].split("html: `")[1].split("`\n}")[0]
        # properly escape backticks
        html_part = html_part.replace('`', '\\`')
        return f"""  {{
    id: {mod_id},
    theme: '{theme}',
    title: '{title}',
    html: `{html_part}`
  }}"""
    except Exception as e:
        print(f"Error extracting {mod_id}: {e}")
        return ""

modules = []
modules.append(extract_module("Módulo 6: Segmentación de Mercado", "// MÓDULO 6: SEGMENTACIÓN DE MERCADO", "// MÓDULO 7: GUÍAS DE TURISMO", 6, "catalina"))
modules.append(extract_module("Módulo 7: Guión y Guías de Turismo", "// MÓDULO 7: GUÍAS DE TURISMO", "// MÓDULO 8: FINANZAS", 7, "concordo"))
modules.append(extract_module("Módulo 8: Finanzas", "// MÓDULO 8: FINANZAS", "// MÓDULO 9: MARCA COMERCIAL", 8, "catalina"))
modules.append(extract_module("Módulo 9: Marca Comercial", "// MÓDULO 9: MARCA COMERCIAL", "// MÓDULO 10: GENERACIÓN DE CONTENIDOS", 9, "torch"))
modules.append(extract_module("Módulo 10: Generación de Contenidos", "// MÓDULO 10: GENERACIÓN DE CONTENIDOS", "// MÓDULO 11: COSTOS Y PRECIOS", 10, "amazon"))
modules.append(extract_module("Módulo 11: Costos y Precios", "// MÓDULO 11: COSTOS Y PRECIOS", "];", 11, "catalina"))

final_js = "export const legacyModules = [\n" + ",\n".join(modules) + "\n];\n"

with open('/Users/cultur/.gemini/antigravity/scratch/repo-github/src/pages/CursoIntegrado/legacyData.js', 'w', encoding='utf-8') as f:
    f.write(final_js)

print("Successfully extracted modules 6-11 via Python.")
