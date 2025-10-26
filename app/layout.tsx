export const metadata = {
  title: "SoleTheory — Premium Sneakers",
  description: "Authentic-quality sneakers. Orders via WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body style={{fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell"}}>
        <nav style={{position:"sticky",top:0,backdropFilter:"blur(8px)",background:"#fff8",borderBottom:"1px solid #eee"}}>
          <div style={{maxWidth:960,margin:"0 auto",padding:"12px 16px",display:"flex",justifyContent:"space-between"}}>
            <a href="/" style={{fontWeight:700}}>SoleTheory</a>
            <div style={{display:"flex",gap:12,fontSize:14}}>
              <a href="/">Home</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer style={{borderTop:"1px solid #eee",marginTop:24,background:"#fff"}}>
          <div style={{maxWidth:960,margin:"0 auto",padding:"16px",fontSize:12,color:"#666"}}>
            © {new Date().getFullYear()} SoleTheory — Orders: WhatsApp +40721527147 • Email: soletheory.fit@gmail.com
          </div>
        </footer>
      </body>
    </html>
  );
}
