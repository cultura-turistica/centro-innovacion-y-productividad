import nbformat as nbf
import os

# -------- FONTUR 01 MAKER ========
nb1 = nbf.v4.new_notebook()
nb1.cells.append(nbf.v4.new_markdown_cell("# Análisis FONTUR Profundo (Parte 1): Eficiencia, Concentración y Poder de Contratación"))
nb1.cells.append(nbf.v4.new_code_cell("""import pandas as pd\nimport json\nimport os\nDATA_DIR = '../data'\nOUTPUT_DIR = '../src/data'\nos.makedirs(OUTPUT_DIR, exist_ok=True)\nfiles = [f for f in os.listdir(DATA_DIR) if f.endswith('.xlsx')]"""))
nb1.cells.append(nbf.v4.new_markdown_cell("## 1. Eficiencia Operativa (Presupuesto Macro)"))
nb1.cells.append(nbf.v4.new_code_cell("""file_presupuesto = [f for f in files if 'Presupuesto ejecutado' in f or '453994' in f][0]
df_presupuesto = pd.read_excel(os.path.join(DATA_DIR, file_presupuesto), sheet_name='1. Presupuesto 2021-2024', header=4)
df_presupuesto.columns = [str(c).replace('\\n', ' ').strip() for c in df_presupuesto.columns]
df_presupuesto = df_presupuesto.dropna(subset=['Vigencia'])
df_presupuesto['Eficiencia_Pago_Vs_Aprobado'] = (df_presupuesto['Pagado'] / df_presupuesto['Presupuesto aprobado Vigencia']) * 100
display(df_presupuesto[['Vigencia', 'Presupuesto aprobado Vigencia', 'Contratado', 'Pagado', 'Eficiencia_Pago_Vs_Aprobado']])
with open(os.path.join(OUTPUT_DIR, 'fontur_presupuesto_macro.json'), 'w') as f:
    json.dump(df_presupuesto.fillna(0).to_dict(orient='records'), f, indent=4)"""))
nb1.cells.append(nbf.v4.new_markdown_cell("## 2. Índice de Concentración (Modalidades)"))
nb1.cells.append(nbf.v4.new_code_cell("""file_recursos = [f for f in files if '453995' in f or 'RecursosContratados' in f][0]
df_modalidad = pd.read_excel(os.path.join(DATA_DIR, file_recursos), sheet_name='Modalidad_Contratación', header=1)
df_modalidad.columns = [str(c).replace('\\n', ' ').strip() for c in df_modalidad.columns]
df_modalidad = df_modalidad.dropna(how='all')
with open(os.path.join(OUTPUT_DIR, 'fontur_modalidad.json'), 'w') as f:
    json.dump(df_modalidad.fillna(0).to_dict(orient='records'), f, indent=4)"""))
nb1.cells.append(nbf.v4.new_markdown_cell("## 3. Minería de Contratos (Muestra granular)"))
nb1.cells.append(nbf.v4.new_code_cell("""file_aclaracion = [f for f in files if 'Aclaracin' in f or '453996' in f][0]
df_contratos = pd.read_excel(os.path.join(DATA_DIR, file_aclaracion), sheet_name='Contratos', header=0)
df_contratos.columns = [str(c).strip() for c in df_contratos.columns]
res_mod = df_contratos.groupby('MODALIDAD DE CONTRATACIÓN').agg(
    Total_Contratos=('N° CONTRATO', 'count'), Valor_Suma=('VALOR INICIAL Y APORTADOS POR FONTUR', 'sum')
).reset_index()
res_mod['Porcentaje'] = (res_mod['Valor_Suma'] / res_mod['Valor_Suma'].sum()) * 100
display(res_mod.sort_values('Valor_Suma', ascending=False))
with open(os.path.join(OUTPUT_DIR, 'fontur_analisis_profundo.json'), 'w') as f:
    json.dump({'resumen_modalidad': res_mod.fillna(0).to_dict(orient='records')}, f, indent=4)
print("✅ FONTUR 01 Procesado Exitosamente")"""))
with open("mcmc-api/FONTUR_01_Evolucion_Contratacion.ipynb", "w", encoding="utf-8") as f:
    nbf.write(nb1, f)

# -------- FONTUR 02 MAKER ========
nb2 = nbf.v4.new_notebook()
nb2.cells.append(nbf.v4.new_markdown_cell("# Análisis FONTUR Profundo (Parte 2): Perfilamiento de Riesgos e Incumplimientos"))
nb2.cells.append(nbf.v4.new_code_cell("""import pandas as pd\nimport json\nimport os\nDATA_DIR = '../data'\nOUTPUT_DIR = '../src/data'\nfiles = [f for f in os.listdir(DATA_DIR) if f.endswith('.xlsx')]"""))
nb2.cells.append(nbf.v4.new_code_cell("""file_incump = [f for f in files if '453995' in f or 'RecursosContratados' in f][0]
df_inc = pd.read_excel(os.path.join(DATA_DIR, file_incump), sheet_name='Incumplimientos', header=0)
df_inc.columns = [str(c).strip() for c in df_inc.columns]
# Limpieza de comillas dobles que rompen json
df_inc = df_inc.replace({'"': ''}, regex=True)

# 1. Vulnerabilidad por Supervisor
sup_risk = df_inc['Supervisor'].value_counts().reset_index()
sup_risk.columns = ['Supervisor', 'Cantidad_Incumplimientos']
display(sup_risk.head(5))

# 2. Punto de Colapso (Porcentaje de avance al momento de falla)
# Extraemos números del porcentaje de ejecución
df_inc['Porcentaje_Numerico'] = df_inc['Porcentaje de Ejecución Física'].astype(str).str.extract(r'(\d+)').astype(float)
media_colapso = df_inc['Porcentaje_Numerico'].median()
print(f"Punto medio estadístico de colapso de contratos: {media_colapso}% de avance físico")

with open(os.path.join(OUTPUT_DIR, 'fontur_riesgos_perfilados.json'), 'w') as f:
    json.dump({
        'supervisor_risk': sup_risk.fillna(0).to_dict(orient='records'),
        'media_colapso_fisico': media_colapso
    }, f, indent=4)
print("✅ FONTUR 02 Procesado Exitosamente")"""))
with open("mcmc-api/FONTUR_02_Riesgos_Incumplimientos.ipynb", "w", encoding="utf-8") as f:
    nbf.write(nb2, f)

print("Notebooks escritos. Ejecutando FONTUR 01...")
