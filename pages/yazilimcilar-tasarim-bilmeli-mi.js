import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Blog - Yazılımcılar tasarım bilmeli mi ?</title>
      </Head>
      <div className="content">
        <article>
          <h1>Yazılımcılar tasarım bilmeli mi ?</h1>
          <span>10 Aralık 2020, 2 min read</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            iusto perspiciatis dicta neque fugit excepturi rem dolore illo
            voluptates sint exercitationem natus, suscipit at consectetur
            reprehenderit mollitia doloribus ad non! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Velit ullam, architecto, modi soluta
            corporis adipisci nobis praesentium repellendus, repudiandae officia
            quibusdam tenetur quaerat enim error molestiae maiores iusto.
            Exercitationem, vel. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur iusto perspiciatis dicta neque fugit
            excepturi rem dolore illo voluptates sint exercitationem natus,
            suscipit at consectetur reprehenderit mollitia doloribus ad non!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            ullam, architecto, modi soluta corporis adipisci nobis praesentium
            repellendus, repudiandae officia quibusdam tenetur quaerat enim
            error molestiae maiores iusto. Exercitationem, vel.
          </p>
          <div className="fakeImage"></div>
          <p className="last-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            iusto perspiciatis dicta neque fugit excepturi rem dolore illo
            voluptates sint exercitationem natus, suscipit at consectetur
            reprehenderit mollitia doloribus ad non! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Velit ullam, architecto, modi soluta
            corporis adipisci nobis praesentium repellendus, repudiandae officia
            quibusdam tenetur quaerat enim error molestiae maiores iusto.
            Exercitationem, vel. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur iusto perspiciatis dicta neque fugit
            excepturi rem dolore illo voluptates sint exercitationem natus,
            suscipit at consectetur reprehenderit mollitia doloribus ad non!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            ullam, architecto, modi soluta corporis adipisci nobis praesentium
            repellendus, repudiandae officia quibusdam tenetur quaerat enim
            error molestiae maiores iusto. Exercitationem, vel.
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
