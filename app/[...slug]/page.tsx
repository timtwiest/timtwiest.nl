import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';

import { Metadata } from 'next';
import { Mdx } from '@/components/mdx-components';
import Link from 'next/link';

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slug.replace('/', '') === slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <div className="container flex flex-col space-y-6 divide-y">
      <div className="space-y-1 pt-6">
        <article className="prose dark:prose-invert">
          <h2 className="mb-2">{post.title}</h2>
          {post.description && (
            <p className="text-md mt-0">{post.description}</p>
          )}
          <Mdx code={post.body.code} />
        </article>
      </div>
      <div className="flex justify-center space-y-1 py-6 pt-6">
        <Link href="/">&#8598; Go back</Link>
      </div>
    </div>
  );
}
