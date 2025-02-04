'use client'

import { Cats } from '@/app/page'
import { getAllCatsById } from '@/server/cats'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const DetailCat = () => {
  const {id} = useParams()
  const { data : cat, isLoading, isFetching } = useQuery({
    queryKey: ['detailCats', id], // Tambahkan id ke queryKey untuk caching
    queryFn: () => getAllCatsById(id), // Gunakan function reference
    enabled: !!id, // Pastikan query hanya dijalankan jika id tersedia
  });

  if (isLoading || isFetching) {
    return <div>Loading....</div>
  }
  return (
   <>
    {/* {data.map((cat: Cats) => ( */}
  <div className="grid grid-cols-1 place-items-center" key={cat._id}>
    {/* <Link href={`/cat/${cat._id}`}> */}
      <div className="cursor-pointer p-4 border rounded-lg hover:shadow-lg">
        <img src={cat.thumbnailUrl} alt={cat.title} className="w-full h-auto rounded-lg" width={50} />
        <ul className="mt-10">
          <li className="font-bold">{cat.title}</li>
          <li className="text-gray-600">{cat.description}</li>
        </ul>
      </div>
      <Link href={`/`} className='mt-5 bg-white rounded-md text-black px-3 py-5'>Kembali</Link>
    {/* </Link> */}
  </div>
{/* ))} */}
   </>
  )
}

export default DetailCat