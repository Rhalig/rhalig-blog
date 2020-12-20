import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Blog - CSS : Seçiciler</title>
      </Head>
      <div className="content">
        <article>
          <h1>CSS : Seçiciler</h1>
          <span>20 Aralık 2020, 3 min read</span>
          <p>
          Yeni bir yazıma daha hoşgeldiniz. Bu yazımda sizlere CSS'teki seçicilerden bahsedeceğim. İsterseniz hemen başlayalım CSS'te 5 tür seçme işlemi vardır. 
          </p>
          <img className="fakeImage" src="/css-seciciler.png"></img>
          <p>
          Hemen ilk seçicimiz ile başlayalım. İlk seçicimizin ismi element seçici ismindende anlayacagınız üzere bu seçim işlemi ile html kodumuzdaki elementleri seçebiliyoruz. Bir örnek ile hemen daha iyi anlayalım.
            <br/>
            <p className="code">p background-color:red;  </p>
          </p>
          <p className="">
          2. seçicimiz ise id selector bu seçimde ise elementlere verdiğimiz idleri seçerek css kodumuzu yazıyoruz. Id ve class universal seçicilerinin element seçicilerden 1 farkı var. Id seciclerde ıd tagımızın başına "#" class seçicilerde "." ve universal seçicilerde ise "*" simgelerini kullanıyoruz. Peki soracaksınız niye elementler var iken idleri kullanıyoruz. Cevabı çok basit örneğin 2 tane p elementiniz var
          ama siz sadece 1'inde renk değişimi yapmak istiyorsunuz. Bunu yapmak için id veya class seçicilere başvuruyoruz.
          <br/>
          <p className="code">#paragraf &#123; color:red; &#125;</p>
          </p>
          <p>
          Bir de class seçicilere bakalım class seçiciler elementlere verdiğimiz classları seçmemizi sağlar. Bir class seçici örneği yapalım.
          <br/>
          <p className="code">.paragraf &#123; color:blue; &#125;</p>
          <p className="note">
          Not : Id veya class seçiciler kullanırken  her zaman id seçici , class seçiciyi ezer bu yüzden id seçicileri pek kullanmaya özen göstermeyin.
          </p>
          4. Seçicimiz universal seçiciler bu seçicimiz tüm html kodunu seçmemizi sağlar. Örnek yaparak daha iyi bir şekilde anlayalım.
          <br/>
          <p className="code">* &#123; text-align:center; &#125;</p>
          </p>
          <p>
          Aldıgımız çıktıda gördüğünüz üzere tüm yazılarımız ortalandı. Son seçicimize geçelim son seçicimizin ismi ise grup seçiciler bunlar bir grup olarak seçim yapmamızı sağlarlar. Aşağıda gördüğünüz örnekte p ve h1 elemenlerini seçip mavi renke çevirdik. Grup seçicilerde kısaca bu şekilde.
          <br/>
          <p className="code">p h1 &#123; color:blue; &#125;</p>
          </p>
          <p className="last-p">
            Bugünki yazımızda CSS seçicilerini ele aldık kısaca anlatımı bu şekilde. Sonraki yazılarda görüşmek üzere
          </p>
          <Link href="/">
            <a class="back">Back</a>
          </Link>
        </article>
      </div>
    </Layout>
  );
}

export default HomePage;
