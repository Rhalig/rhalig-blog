import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Blog - CSS : Renkler</title>
      </Head>
      <div className="content">
        <article>
          <h1>CSS : Renkler</h1>
          <span>19 Aralık 2020, 3 min read</span>
          <p>
            Kısa bir süre önce 1.5 aylık bir CSS öğrenme geçmişim oldu. Ardından ise öğrendiklerimi bir topluluğa anlatma ihtiyacı buldum ve bu yazıyı yazıyorum. Bu yazımda sizlere CSS'in renk özelliklerinden bahsedeceğim. İyi okumalar dilerim.
          </p>
          <img className="fakeImage" src="/css-renkler.png"></img>
          <p>
            CSS'te 3 tane renk grubu vardır. Başlıca saymak gerekir ise background color , text color ve son olarak ise border colordır. Background color konusundan başlayalım , background color
            anlayabileceğiniz üzere seçtiğimiz element , id veya classın arkaplanına renk vermemizi sağlar. Hemen bir örnek ile daha iyi bir şekilde anlayalım:
            <br/>
            <p className="code">&lt;p style="background-color:red;"&gt;Kırmızı arka plan&lt;/p&gt;</p>
          </p>
          <p className="pa">
          Yukarı gördüğünüz örneğinin çıktısı "Kırmızı arka plan" yazılı yazının arkaplanı kırmızı şeklinde oldu. Background-color tam da bu işe 
          yarar. Şimdi ise text color'ı ele alalım. Text color ise yazılara renk vermemizi sağlar. Aşağıdaki örnekte nasıl kullanıldıgını görelim.
          <br/>
          <p className="code">&lt;p style="text-color:red;"&gt;Kırmızı yazı&lt;/p&gt;</p>
          </p>
          <p>
          Yaptıgımız örneğin çıktısındada göreceğiniz üzere "Kırmızı yazı" yazan kırmızı bir yazı oluşacak. Son olarakta işleyeceğimiz konu ise border color. Border color kullanımı şu şekilde (Borderın büyüklüğü , Border türü , Border Rengi) şimdi ise bir örnek ile pekiştirelim.
          <br/>
          <p className="code">&lt;p style="border:2px solid red;"&gt;Kırmızı border&lt;/p&gt;</p>
          </p>
          <p className="last-p">
          Gördüğünüz gibi kırmızı bir renkte 2px genişliğinde bir borderımız oluştu. Bugünkü konumuzda CSS'deki renkler konusunu ele aldık. Umarım güzel bir yazı olmuştur. Daha fazla bu şekilde bilgilendirice yazılar görmek istiyorsanız siteyi takipte kalabilirsiniz.
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
