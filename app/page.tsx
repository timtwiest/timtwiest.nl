import { allPosts } from '@/.contentlayer/generated';
import Link from 'next/link';
import { socialLinks } from '@/config/site';

export default function Home() {
  return (
    <div className="container flex flex-col space-y-6 divide-y">
      <div className="space-y-1 pt-6">
        <h2 className="font-heading text-xl">Who</h2>
        <p className="text-muted-foreground">
          I'm a full-stack developer, currently working at{' '}
          <Link
            href="https://pancompany.com"
            className="font-medium hover:underline hover:underline-offset-4"
            target="_blank"
          >
            PanCompany &#8599;
          </Link>
          .
        </p>
      </div>
      <div className="space-y-1 pt-6">
        <h2 className="font-heading text-xl">Notes</h2>
        <p className="text-muted-foreground">
          Notes on things you can do on your computer.
        </p>
        <div className="space-y-4 py-4">
          {allPosts.map((post) => (
            <article key={post._id}>
              <Link
                className="flex flex-col space-y-1.5 !no-underline"
                href={post.slug}
              >
                <span className="font-medium underline underline-offset-4">
                  {post.title}
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
      <div className="space-y-1 pt-6">
        <h2 className="font-heading text-xl">Links</h2>
        <p className="text-muted-foreground">Where do I hang out?</p>
        <ul className="space-y-4 py-4">
          {Object.entries(socialLinks).map(([key, value]) => (
            <li key={key}>
              <Link
                className="flex flex-col space-y-1.5 !no-underline"
                href={value}
              >
                <span className="font-medium underline underline-offset-4 ">
                  {value}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
