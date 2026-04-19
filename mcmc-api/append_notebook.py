import nbformat as nbf
import os

nb_path = "mcmc-api/FONTUR_01_Evolucion_Contratacion.ipynb"
with open(nb_path, "r", encoding="utf-8") as f:
    nb = nbf.read(f, as_version=4)

md_cell = nbf.v4.new_markdown_cell("## Incorporación del Presupuesto Macro Ejecutado\nPara tener una visión completa (y no solo la mitad de los datos vinculados a la modalidad), incorporamos el archivo de ejecución presupuestal global.")
nb.cells.append(md_cell)

code_cell1 = nbf.v4.new_code_cell("""# Buscamos el archivo de presupuesto general
file_presupuesto = [f for f in files if 'Presupuesto ejecutado' in f or '453994' in f][0]
path_presupuesto = os.path.join(DATA_DIR, file_presupuesto)
print("Analizando Presupuesto Macro:", path_presupuesto)

df_presupuesto = pd.read_excel(path_presupuesto, sheet_name='1. Presupuesto 2021-2024', header=3)
# Limpieza básica
df_presupuesto = df_presupuesto.dropna(subset=['Vigencia'])
display(df_presupuesto)""")
nb.cells.append(code_cell1)

code_cell2 = nbf.v4.new_code_cell("""# Exportar el presupuesto macro
export_presupuesto = df_presupuesto.fillna(0).to_dict(orient='records')
with open(os.path.join(OUTPUT_DIR, 'fontur_presupuesto_macro.json'), 'w') as f:
    json.dump(export_presupuesto, f, indent=4)
print("✅ Presupuesto macro exportado exitosamente a src/data/fontur_presupuesto_macro.json")""")
nb.cells.append(code_cell2)

with open(nb_path, "w", encoding="utf-8") as f:
    nbf.write(nb, f)
print("Notebook actualizado")
