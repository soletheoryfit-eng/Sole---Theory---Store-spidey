import Image from "next/image";

const ron = (n:number)=> new Intl.NumberFormat("ro-RO",{style:"currency",currency:"RON"}).format(n);
const waLink = (name:string, price:number) =>
  `https://wa.me/40721527147?text=${encodeURIComponent(`Salut! Vreau sa comand: ${name} (${price} RON).`)}`;

export default function Home() {
  const product = {
    name: "AeroFlex Runner Black",
    priceRON: 349,
    image: "/images/aeroflex-black.jpg",
    desc: "Authentic-quality runner. Shipped from verified suppliers in U.S. & China."
  };

  return (
    <div style={{maxWidth:960,margin:"0 auto",padding:"24px 16px"}}>
      <section style={{display:"grid",gridTemplateColumns:"1fr",gap:16,alignItems:"center"}}>
        <div>
          <h1 style={{fontSize:36,margin:0,fontWeight:800}}>Elevate Every Step.</h1>
          <p style={{color:"#555",marginTop:8}}>
            Authentic-quality sneakers shipped from the U.S. & China. Prices in RON. Payment after confirmation.
          </p>
        </div>
        <div style={{borderRadius:24,overflow:"hidden",boxShadow:"0 10px 30px #0001"}}>
          <Image src="/images/aeroflex-black.jpg" alt="SoleTheory" width={1200} height={800} />
        </div>
      </section>

      <section style={{marginTop:24}}>
        <h2 style={{fontSize:22,fontWeight:800,marginBottom:12}}>Featured</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16}}>
          <div style={{border:"1px solid #eee",borderRadius:20,overflow:"hidden",background:"#fff"}}>
            <div style={{position:"relative",aspectRatio:"4/3"}}>
              <Image src={product.image} alt={product.name} fill style={{objectFit:"cover"}} />
            </div>
            <div style={{padding:12}}>
              <div style={{fontWeight:600}}>{product.name}</div>
              <div style={{fontSize:14,color:"#666"}}>{product.desc}</div>
              <div style={{marginTop:6,fontWeight:700}}>{ron(product.priceRON)}</div>
              <a href={waLink(product.name, product.priceRON)} style={{
                display:"inline-block",marginTop:8,padding:"8px 12px",borderRadius:12,background:"#000",color:"#fff",fontSize:14
              }}>Order on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
