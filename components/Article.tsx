import Image from "next/image";
import Link from "next/link";
import { Chip } from "./Chip";

export interface ArticleData {
  id: string | number;
  author: { id: number; name: string };
  category: string | null;
  title: string;
  description: string;
  content: string;
  img: string;
  length: string;
  releasedAt: Date;
}

export const ARTICLES: ArticleData[] = [
  {
    id: 1,
    category: "New",
    img: "https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Write anything. Be creative.",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam,`,
    author: {
      id: 1,
      name: "Jack Sparrow",
    },
    releasedAt: new Date(2021, 4, 23),
    length: "1hr 20min",
    content: `<p>This is the content of Article 1. It can contain multiple paragraphs, images, and links. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique convallis neque id consequat. Vivamus ac diam feugiat, condimentum turpis vel, mollis elit. Integer fringilla arcu quis mi rhoncus, nec sagittis nisi feugiat. Ut non leo ultricies, cursus lectus sed, vulputate arcu. Quisque id dictum mauris. Donec ultrices nunc ut tincidunt aliquam. Donec id erat felis. Nam faucibus dui non augue facilisis dapibus. Duis nec faucibus eros, in interdum massa. In pharetra nunc sed ultrices luctus.</p>
    <img src="https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Sample Image">
    <p>Curabitur vitae purus bibendum, gravida eros ac, lacinia urna. Mauris iaculis finibus dapibus. Etiam efficitur arcu et lacinia ultrices. Sed sit amet consequat metus. Integer condimentum bibendum lorem non dignissim. Nullam ultricies consequat mauris vitae laoreet. Cras accumsan arcu id urna dapibus fringilla. Suspendisse vel nisl eros. Aliquam tempus fermentum ultricies. Duis malesuada cursus rhoncus. Ut ut quam tristique, ullamcorper nisi non, lobortis lectus. Donec et tortor a lacus lobortis fringilla sed sit amet neque. Sed pulvinar efficitur risus, id pretium odio aliquam non. Sed nec dui id erat vestibulum cursus. Nunc eget massa vel sapien venenatis rhoncus ut eget metus.</p>
    <a href="https://www.example.com">Read more</a>`,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1626318305863-bb23d0297c0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    category: "Entertainment",
    title: "Improving your day to the MAX",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam,`,
    author: {
      id: 1,
      name: "Jack Sparrow",
    },
    releasedAt: new Date(2021, 2, 23),
    length: "1hr 20min",
    content: `<p>This is the content of Article 2. It can contain different formatting styles, such as bold and italic text. Mauris ultrices neque quis arcu maximus, eu feugiat tellus finibus. Maecenas lacinia urna eu lacus tincidunt, eget pellentesque nulla ultricies. Morbi congue magna a purus cursus, in laoreet sapien ultricies. Nulla in tempor lorem. Suspendisse luctus, mauris non interdum scelerisque, turpis diam tincidunt lacus, vel malesuada turpis tortor id nunc. Curabitur vehicula gravida lorem et hendrerit. Aliquam nec risus id est rutrum egestas. Aenean sagittis tincidunt felis, vel feugiat massa finibus in. Sed ac est ante.</p>
    <p><strong>This text is bold.</strong> Pellentesque ac tellus sed est blandit eleifend. In efficitur ante in orci finibus aliquam. Nulla facilisi. Ut in lorem nunc. Donec eu dolor ut sem elementum varius non ut nunc. Nam id neque cursus, lacinia dui vel, ullamcorper dui. Phasellus vitae posuere arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam non ligula in urna interdum ullamcorper. Donec vehicula leo vel sem gravida malesuada. Suspendisse eleifend felis ac sem sollicitudin, eget pulvinar felis porttitor.</p>
    <p><em>This text is italic.</em> Morbi viverra justo non odio condimentum, in pharetra purus vulputate. Nam id fringilla ligula. Aliquam venenatis neque metus, sit amet varius tortor dictum at. Sed sed ullamcorper lacus. Suspendisse faucibus finibus tincidunt. Aenean efficitur interdum mauris nec fermentum. Aliquam pulvinar, dui id vehicula finibus, nunc metus facilisis nisl, id convallis lorem enim nec tellus. Morbi consectetur diam sit amet massa pulvinar, ut dictum justo lobortis. Morbi dapibus facilisis metus, nec faucibus orci dignissim sit amet. Integer rhoncus rutrum nunc ut suscipit. Proin bibendum turpis id volutpat sagittis. Proin cursus auctor lectus, eget interdum odio vestibulum id. Curabitur dignissim pulvinar velit. Mauris vel lectus vel tellus congue egestas. Quisque in efficitur ligula.</p>`,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Entertainment",
    title: "Heading of Article 3",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam,`,
    author: {
      id: 1,
      name: "Jack Sparrow",
    },
    releasedAt: new Date(2021, 2, 23),
    length: "1hr 20min",
    content: `<p>This is the content of Article 3. It can include lists. Mauris eu libero lorem. Proin semper ante a leo laoreet, et facilisis turpis feugiat. Curabitur interdum nisl quis nisl iaculis venenatis. Maecenas sem mi, venenatis at turpis sed, finibus congue nunc. Nullam dapibus sollicitudin quam ac malesuada. Sed fermentum, ligula id consectetur bibendum, justo est convallis lectus, id dapibus sem purus ac tellus. Integer nec mi nec nibh feugiat scelerisque. Nulla facilisi. Fusce faucibus lobortis volutpat. Mauris sed tellus eget mi suscipit feugiat sed quis augue. Integer cursus nunc id posuere cursus. Sed feugiat justo eu eleifend vestibulum. Pellentesque porta purus elit, eu dapibus elit venenatis sit amet. Integer fermentum efficitur iaculis.</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
    <p>Donec posuere arcu at metus condimentum, eget ultricies est iaculis. Mauris et dapibus urna. Nam bibendum fringilla felis vitae pellentesque. Donec aliquet lobortis felis nec auctor. Nulla facilisi. Integer vel eleifend mauris. Nulla maximus felis id ante malesuada rutrum. Quisque rhoncus augue eget odio fermentum, sed mattis urna scelerisque. Integer fringilla lobortis nulla, at congue erat. In sed volutpat turpis. Donec sit amet leo tincidunt, volutpat nibh vel, rutrum tortor. Integer quis sapien malesuada, tincidunt purus id, egestas urna. Duis a arcu vel risus convallis scelerisque. Suspendisse at nisl justo. Fusce dictum augue vel consequat vulputate. Sed laoreet ligula in felis iaculis, vitae aliquet orci lobortis. Nullam sagittis nisi in tortor iaculis, at lobortis leo fermentum.</p>`,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1626197031507-c17099753214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Entertainment",
    title: "Heading of Article 4",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam,`,
    author: {
      id: 1,
      name: "Jack Sparrow",
    },
    releasedAt: new Date(2021, 2, 23),
    length: "1hr 20min",
    content: `<p>This is the content of Article 4. It may have blockquotes. Integer blandit euismod lectus ut rhoncus. Nam ut iaculis urna. Nunc laoreet tellus nec sapien dignissim sollicitudin. Suspendisse dignissim nunc in mauris ullamcorper tristique. Sed feugiat, dolor ut posuere hendrerit, nunc elit ultricies massa, et fermentum velit metus ut ex. Ut congue nunc ut sapien iaculis, vel tristique sem tempor. Proin eu mauris eu ipsum congue dictum. Fusce in vestibulum erat, eu aliquet metus. Maecenas semper nisl a mi tempor, eu fringilla erat ullamcorper. Vestibulum bibendum semper arcu a lobortis.</p>
    <blockquote>
      <p>This is a blockquote. It can be used to highlight important information or quotes. Sed eu lectus condimentum, scelerisque orci non, laoreet ipsum. Vivamus euismod dui quis tortor suscipit, ut gravida turpis faucibus. Sed in vulputate turpis. Aenean rhoncus fermentum arcu, nec varius felis gravida nec. Donec feugiat mi at nunc ullamcorper, sed sagittis leo rutrum. Ut a facilisis elit. Fusce ultricies lectus eget sem egestas varius. Etiam in ligula quis quam venenatis laoreet ut non sem. Curabitur commodo commodo quam at maximus. Ut ac fringilla arcu. Nulla facilisi.</p>
    </blockquote>
    <p>Sed ultricies placerat neque vel placerat. Donec ut eros congue, aliquet dui sed, dapibus neque. Mauris pellentesque leo et elit tristique facilisis. Nulla dapibus lobortis massa, in rutrum felis tincidunt vel. Sed gravida lectus ut tellus congue, vel luctus orci tristique. Aenean eu libero nec orci semper fermentum. Cras dapibus vitae arcu id facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas ullamcorper nunc vitae velit euismod, a fermentum neque ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum convallis dignissim purus, a tincidunt tortor bibendum vitae. Curabitur lacinia dolor sed mi hendrerit, nec volutpat neque ultricies. Integer non finibus turpis, ut tincidunt erat.</p>`,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1581977012607-4091712d36f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Entertainment",
    title: "Heading of Article 5",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam,`,
    author: {
      id: 1,
      name: "Jack Sparrow",
    },
    releasedAt: new Date(2021, 2, 23),
    length: "1hr 20min",
    content: `<p>This is the content of Article 5. It may contain tables:</p>
    <table>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
      <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
      </tr>
      <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
      </tr>
    </table>`,
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1682685797660-3d847763208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Entertainment",
    title: "Improving your day to the MAX",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam,`,
    author: {
      id: 1,
      name: "Jack Sparrow",
    },
    releasedAt: new Date(2021, 2, 23),
    length: "1hr 20min",
    content: `<h1>Heading of Article 6</h1>
    <p>This is the content of Article 6. It may have embedded videos:</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/examplevideo" frameborder="0" allowfullscreen></iframe>`,
  },
] satisfies ArticleData[];

import "./Article.css";

export function Article({ article }: { article: ArticleData }) {
  return (
    <article className="article">
      <Image
        width={500}
        height={500}
        alt=""
        src={article.img}
        className="article__img"
      />
      {article.category && (
        <Link href={`/search?tag=${article.category}`}>
          <Chip>{article.category}</Chip>
        </Link>
      )}
      <Link
        className="article__title"
        href={`/article/${article.id}`}
      >
        {article.title}
      </Link>
      <span className="article__description">{article.description}</span>
      <div className="article__footer">
        <Link
          className="article__author"
          href={`/user/${article.author.id}`}
        >
          {article.author.name}
        </Link>
        <span className="article__release-date">
          ·{" "}
          {new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }).format(article.releasedAt)}{" "}
          ·
        </span>
        <span className="article__length">
          {article.length}. read
        </span>
      </div>
    </article>
  );
}
