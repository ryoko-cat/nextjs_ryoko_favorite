import Link from "next/link";
import Count from "./count";

export default function Home(data) {
  return (
    <div>
      <div className="mt-5 flex flex-wrap justify-center space-x-7 mb-7">
        <img src={"/images/iruma.jpg"} alt="iruma" width={200} height={280}  objectFit="contain"></img>
        <img src={"/images/furiren.jpg"} alt="furiren" width={200} height={280}  objectFit="contain"></img>
        <img src={"/images/kusuriya.jpg"} alt="kusuriya" width={200} height={280} objectFit="contain"></img>
        <img src={"/images/yotsuba.jpg"} alt="yotsuba" width={200} height={280} objectFit="contain"></img>
        <img src={"/images/hirayasumi.jpg"} alt="hirayasumi" width={200} height={280} objectFit="contain"></img>
      </div>
      <div className="mt-8 text-center">
        <h1 className="text-3xl font-bold text-cyan-900 font-mono">My Love Comics</h1>
      </div>
      <div className="mt-5 text-center">
        <p className="text-lg text-cyan-700 font-serif">コミックタイトルをクリックすると好きな理由が分かります!</p>
      </div>
      <div className="mt-5 mx-6 flex flex-wrap justify-center">
        {data.posts.map((item)=>{
          return(
            <div key={item.id} className="m-5 bg-white text-center shadow-xl px-8 py-5 rounded">
              <Link className="name" href={`/posts/${item.id}`}>
                <a >{item.name}</a>
              </Link>
              <div><Count /></div>
            </div>
          )})}
      </div>
      <div className="mt-5 flex flex-wrap justify-center space-x-7 mb-10">
        <img src={"/images/akuyakureijyou.jpg"} alt="iakuyakureijyou" width={200} height={280} objectFit="contain"></img>
        <img src={"/images/kisekae.jpg"} alt="kisekae" width={200} height={280} objectFit="contain"></img>
        <img src={"/images/dotennen.jpg"} alt="dotennen" width={200} height={280} objectFit="contain"></img>
        <img src={"/images/zeikin.jpg"} alt="zeikin" width={200} height={280} objectFit="contain"></img>
        <img src={"/images/spy.jpg"} alt="spy" width={200} height={280} objectFit="contain"></img>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.sssapi.app/z599StyovrALshdiWOesP`)
  const posts = await res.json()
  return { props: { posts } }
}