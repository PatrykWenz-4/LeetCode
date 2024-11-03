import pandas as pd

def average_selling_price(prices: pd.DataFrame, units_sold: pd.DataFrame) -> pd.DataFrame:
    
    df = pd.merge(prices, units_sold, on='product_id', how='left')

    df = df[
        (df['start_date'] <= df['purchase_date']) & (df['purchase_date'] <= df['end_date'])
    ]

    df = df[['product_id', 'price', 'units']] 

    df = df.groupby(['product_id']).apply(
        lambda x: (x['price'] * x['units']).sum() / x['units'].sum()
        ).reset_index(name='average_price')

    all_product_ids = pd.DataFrame(prices['product_id'].unique(), columns=['product_id'])
    df = all_product_ids.merge(df, on='product_id', how='left').fillna(0)


    df['average_price'] = df['average_price'].round(2)
    return df

