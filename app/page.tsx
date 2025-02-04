'use client'
import { getAllCats } from "@/server/cats";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
export type Cats = {
  _id : string
  title : string
  thumbnailUrl : string
  description : string
}

export default function Home() {
  const {data, isLoading, isFetching} = useQuery({
    queryKey : ['all.cats'],
    queryFn : getAllCats
  })

  if (isLoading || isFetching) {
    return <div>Loading....</div>
  }
  console.log(data)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 mt-5">
  {data?.slice(2, 30).map((cat: Cats) => (
  <div className="grid grid-cols-1" key={cat._id}>
    <Link href={`/cat/${cat._id}`}>
      <div className="cursor-pointer p-4 border rounded-lg hover:shadow-lg">
        <img src={cat.thumbnailUrl} alt={cat.title} className="w-full h-auto rounded-lg" width={50} />
        <ul className="mt-10">
          <li className="font-bold">{cat.title}</li>
          <li className="text-gray-600">{cat.description}</li>
        </ul>
      </div>
    </Link>
  </div>
))}
    </div>
  );
}
