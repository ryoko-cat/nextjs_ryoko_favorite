import Link from "next/link"

export default function post(param) {
  return (
    <div className="flex justify-center">
      <div className="mt-16 bg-white text-center shadow-xl p-8 w-80 rounded">
        <p className="text-lg font-bold text-cyan-700 font-serif">好きな理由</p>
        <p className="mt-6 text-3xl text-cyan-900 font-mono">{param.post.reason}</p>
        <div className="mt-20 mb-14">
          <span className="bg-white text-center shadow-xl px-8 py-5 rounded"><Link href={`/`}>Return</Link></span>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps=async (context)=>{
  const id=context.query.id
  const res=await fetch(`https://api.sssapi.app/z599StyovrALshdiWOesP/${id}`)
  const post=await res.json()

  return{
    props:{post}
  }
}