import pandas as pd
import warnings
warnings.filterwarnings("ignore")

print("--- EXAMINANDO INCUMPLIMIENTOS ---")
try:
    df_inc = pd.read_excel('data/453995_RecursosContratados202120242.xlsx', sheet_name='Incumplimientos')
    print("Head sin header ajustado:")
    print(df_inc.head(5).iloc[:, :8])
except Exception as e:
    print(e)
    
print("\n--- EXAMINANDO CONTRATOS ACLARACION ---")
try:
    df_con = pd.read_excel('data/453996_RecursosContratados20212024Aclaracin.xlsx', sheet_name='Contratos')
    print("Head sin header ajustado:")
    print(df_con.head(5).iloc[:, :8])
except Exception as e:
    print(e)
