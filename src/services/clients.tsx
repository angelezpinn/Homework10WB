import supabase from "../utils/supabase"
import { Client } from "../models/clients";


export const getCliente = async (): Promise<Client[]> => {
    const { data , error} = await supabase.from("clientes").select();
    if (error)  {
        console.error("Error fetching products:", error);
      } else {
        console.log("cliente:", data); // Agrega esta línea para imprimir los datos
      }
      return data || []; 
}

export const createClientes = async (cliente: Client): Promise<void> => {
  const { error} = await supabase.from("clientes").insert(cliente);
  if (error) throw error;
}