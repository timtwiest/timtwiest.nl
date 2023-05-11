import { allPosts } from '@/.contentlayer/generated';
import Link from 'next/link';
import { socialLinks } from '@/config/site';
import { SectionItem } from '@/components/section-item';

export default function Home() {
  return (
    <div className="container flex flex-col space-y-6 divide-y">
      <SectionItem
        title="Posts"
        description="Posts on things you can do on your computer."
      >
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
      </SectionItem>
      <SectionItem title="Projects" description="What do I do on the web">
        <ul className="space-y-4 py-4">
          <li>
            <Link
              className="flex flex-col space-y-1.5 !no-underline"
              href="https://lagoons.io"
              target="_blank"
            >
              <span className="font-medium underline underline-offset-4 ">
                Lagoons.io
              </span>
              <span className="text-muted-foreground">
                Coming soon, stay tuned!
              </span>
            </Link>
          </li>
        </ul>
      </SectionItem>
      <SectionItem title="Links" description="Where do I hang out?">
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
      </SectionItem>
    </div>
  );
}
