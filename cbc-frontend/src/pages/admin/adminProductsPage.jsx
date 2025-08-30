import axios from "axios";

export default function AdminProductsPage() {

    axios.get("http://localhost:3000/api/products").then((res)=>{
        console.log(res)
        
    })
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Products Page</h1>
      <p className="text-gray-600">Manage your products here.</p>
    </div>
  );
}
   