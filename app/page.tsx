import { SculptureStage } from "./sculpture-stage";

const works = [
  {
    id: "01",
    title: "生长的缝隙",
    year: "2026",
    material: "石膏、综合材料",
    note: "在柔软与坚硬之间，寻找形体自发生长的瞬间。",
    form: "ribbon",
  },
  {
    id: "02",
    title: "静默的回声",
    year: "2025",
    material: "陶、金属",
    note: "空间并非空白，而是被身体经验持续塑形的容器。",
    form: "arch",
  },
  {
    id: "03",
    title: "漂浮体",
    year: "2025",
    material: "树脂、玻璃纤维",
    note: "重量被暂时忘却，形体停留在将要坠落的前一秒。",
    form: "orbit",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="返回首页">
          YAN <i>—</i> JUN
        </a>
        <nav aria-label="主导航">
          <a href="#works">作品</a>
          <a href="#about">关于</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">SCULPTURE · PORTFOLIO · 2026</p>
          <h1>
            以形体
            <br />
            触摸<span>空间</span>
          </h1>
          <p className="intro">
            晏君，河北美术学院雕塑系学生。关注材料、身体与空间之间微妙而持续的关系。
          </p>
          <a className="round-link" href="#works" aria-label="查看作品">
            <span>观看作品</span>
            <b>↓</b>
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-orbit" />
          <div className="hero-form">
            <span />
            <span />
            <span />
          </div>
          <p>FORM<br />&amp; SPACE</p>
        </div>
        <p className="side-note">HEBEI ACADEMY OF FINE ARTS</p>
      </section>

      <section className="works" id="works">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORKS</p>
          <h2>作品选集</h2>
          <p>拖拽旋转 · 滚轮缩放 · 双击复位</p>
        </div>
        {works.map((work, index) => (
          <article className="work" key={work.id}>
            <div className="work-meta">
              <span>{work.id}</span>
              <div>
                <h3>{work.title}</h3>
                <p>{work.material}</p>
              </div>
              <time>{work.year}</time>
            </div>
            <SculptureStage form={work.form} title={work.title} index={index} />
            <p className="work-note">{work.note}</p>
          </article>
        ))}
      </section>

      <section className="about" id="about">
        <div className="portrait-wrap">
          <span>PORTRAIT / 2026</span>
          <img src="/yanjun-avatar.jpg" alt="晏君个人头像" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">ABOUT THE ARTIST</p>
          <h2>晏君</h2>
          <p className="lead">
            我的创作从对日常形态的观察开始。雕塑于我，不只是塑造物体，更是在空间中建立一种可以被感知的关系。
          </p>
          <div className="resume">
            <div><span>身份</span><p>雕塑创作者 / 在读学生</p></div>
            <div><span>院校</span><p>河北美术学院 · 雕塑系</p></div>
            <div><span>方向</span><p>当代雕塑、综合材料、空间装置</p></div>
            <div><span>地点</span><p>中国 · 河北</p></div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <p className="eyebrow">CONTACT / COLLABORATION</p>
        <h2>让形体继续<br /><i>生长。</i></h2>
        <a href="mailto:yanjun.art@example.com">YANJUN.ART@EXAMPLE.COM ↗</a>
        <div className="footer-line">
          <span>© 2026 晏君</span>
          <span>SCULPTURE PORTFOLIO</span>
        </div>
      </footer>
    </main>
  );
}
