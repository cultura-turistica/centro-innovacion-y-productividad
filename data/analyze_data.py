import pandas as pd
import os

data_dir = "./data"
files = [f for f in os.listdir(data_dir) if f.endswith('.xlsx')]

for file in files:
    if "Recursos" in file:
        print(f"\n################ {file} ################")
        file_path = os.path.join(data_dir, file)
        xls = pd.ExcelFile(file_path)
        for sheet in xls.sheet_names:
            df = pd.read_excel(file_path, sheet_name=sheet, skiprows=None)
            # Find the actual header row by looking for a row with the most non-null values
            # in the first 10 rows
            best_row = 0
            max_non_nulls = 0
            for i in range(min(10, len(df))):
                non_nulls = df.iloc[i].count()
                if non_nulls > max_non_nulls:
                    max_non_nulls = non_nulls
                    best_row = i
            
            df = pd.read_excel(file_path, sheet_name=sheet, header=best_row+1)
            print(f"--- Sheet: {sheet} ---")
            print("Columns:", list(df.columns))
            print("Data sample:")
            print(df.head(2).to_string())
