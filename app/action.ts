"use server";

import pb from "@/lib/my_pb";


export async function get3Blog() {
    try {
      const res = await pb.client.collection('Post').getFullList();
      console.log(res);
      return res
    } catch (error) {
      console.log(error)
      return []
    }
  }

  
export async function get5Gallery() {
    try {
      const res = await pb.client.collection('Gallery').getFullList();
      console.log(res);
      return res
    } catch (error) {
      console.log(error)
      return []
    }
  }

export async function getBlog() {
    try {
      const res = await pb.client.collection('Post').getFullList();
      console.log(res);
      return res
    } catch (error) {
      console.log(error)
      return []
    }
  }

  
export async function getGallery() {
    try {
      const res = await pb.client.collection('Gallery').getFullList();
      console.log(res);
      return res
    } catch (error) {
      console.log(error)
      return []
    }
  }
  
  export async function getAuthor() {
    try {
      const res = await pb.client.collection('Author').getFullList();
      console.log(res);
      return res
    } catch (error) {
      console.log(error)
      return []
    }
  }
  
  