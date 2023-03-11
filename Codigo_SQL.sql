CREATE TABLE sales_data (
  purchase_date TEXT,  
  id_marca INTEGER,
  vendas INTEGER,
  valor_do_veiculo INTEGER,
  nome TEXT,
  marca TEXT
);

INSERT INTO sales_data (purchase_date, id_marca, vendas, valor_do_veiculo, nome, marca)
SELECT 
  nd1.c1, 
  nd1.c2, 
  nd1.c3, 
  nd1.c4, 
  nd1.c5, 
  nd2.c2 
FROM 
  new_database_1 nd1
  INNER JOIN new_database_2 nd2 ON nd1.c2 = nd2.c1;