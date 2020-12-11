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
            Exercitationem, vel.
          </p>
          <Link href="/yazilimcilar-tasarim-bilmeli-mi">
            <a class="read">Read more</a>
          </Link>
          <div class="border"></div>
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
            Exercitationem, vel.
          </p>
          <a href="#" class="read">
            Read more
          </a>
          <div class="border"></div>
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
            Exercitationem, vel.
          </p>
          <a href="#" class="read">
            Read more
          </a>
          <div class="border"></div>
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
            Exercitationem, vel.
          </p>
          <a href="#" class="read">
            Read more
          </a>
        </article>
      </div>
    </Layout>
  );
}

export default HomePage;
