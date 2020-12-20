import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Rhalig - Blog</title>
      </Head>
      <div class="content">
        <article>
          <h1>CSS : Seçiciler</h1>
          <span>20 Aralık 2020, 2 min read</span>
          <p>
            Yeni bir yazıma daha hoşgeldiniz. Bu yazımda sizlere CSS'teki seçicilerden bahsedeceğim. İsterseniz hemen başlayalım CSS'te 5 tür seçme işlemi vardır. Hemen ilk seçicimiz ile başlayalım.
            İlk seçicimizin ismi element seçici ismindende anlayacagınız üzere bu seçim işlemi ile html kodumuzdaki elementleri seçebiliyoruz. Bir örnek ile hemen daha iyi anlayalım.
          </p>
          <Link href="/css-seciciler">
            <a class="read">Read more</a>
          </Link>
          <div class="border"></div>
          <h1>CSS : Renkler</h1>
          <span>19 Aralık 2020, 3 min read</span>
          <p>
          CSS'te 3 tane renk grubu vardır. Başlıca saymak gerekir ise background color , text color ve son olarak ise border colordır. Background color konusundan başlayalım , background color
            anlayabileceğiniz üzere seçtiğimiz element , id veya classın arkaplanına renk vermemizi sağlar.
          </p>
          <Link href="/css-renkler">
            <a class="read">Read more</a>
          </Link>
          <div class="border"></div>
        </article>
      </div>
    </Layout>
  );
}

export default HomePage;
