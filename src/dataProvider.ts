    // src/dataProvider.ts
import { supabase } from "./supabaseClient";
import type { DataProvider } from "react-admin";

export const dataProvider: DataProvider = {
  async getList(resource) {
    const { data, error } = await supabase.from(resource).select("*");
    if (error) throw error;

    return {
      data: data || [],
      total: data?.length || 0,
    };
  },

  async getOne(resource, { id }) {
    const { data, error } = await supabase
      .from(resource)
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return { data };
  },

  async create(resource, { data }) {
    const { data: result, error } = await supabase
      .from(resource)
      .insert(data)
      .select()
      .single();

    if (error) throw error;

    return { data: result };
  },

  async update(resource, { id, data }) {
    const { data: result, error } = await supabase
      .from(resource)
      .update(data)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return { data: result };
  },

  async delete(resource, { id }) {
    const { data, error } = await supabase
      .from(resource)
      .delete()
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return { data };
  },

  // required but optional features
  getMany: async () => ({ data: [] }),
  getManyReference: async () => ({ data: [], total: 0 }),
  updateMany: async () => ({ data: [] }),
  deleteMany: async () => ({ data: [] }),
};