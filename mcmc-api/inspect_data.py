import pandas as pd
import os

data_dir = '../data'
files = [f for f in os.listdir(data_dir) if f.endswith('.xlsx')]
file_recursos = [f for f in files if '453995' in f or 'RecursosContratados' in f][0]
file_path = os.path.join(data_dir, file_recursos)

print(f"Reading {file_path}")
xls = pd.ExcelFile(file_path)

for sheet in xls.sheet_names:
    print(f"\n--- Sheet: {sheet} ---")
    df = pd.read_excel(xls, sheet_name=sheet, header=0, nrows=5)
    print("Columns:", df.columns.tolist())
    
# Let's try to find how Modalidad is actually structured
df_mod = pd.read_excel(xls, sheet_name='Modalidad_Contratación', header=0, nrows=10)
print("\nModalidad Sample:\n", df_mod.head())

df_inc = pd.read_excel(xls, sheet_name='Incumplimientos', header=0, nrows=5)
print("\nIncumplimientos Sample:\n", df_inc.head())
