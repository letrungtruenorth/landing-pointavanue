import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import blogPosts from '../data/blog.json';

const Language = () => {
  const { locale, locales, asPath } = useRouter();
  return (
    <div>
      <main>
        <div>
          {(locales as any).map((l: any, i: any) => {
            return (
              <span key={i}>
                <Link href={asPath} locale={l}>
                  {l}
                </Link>
              </span>
            );
          })}
        </div>
        <div className="text-red-800">312312</div>
        <div>
          <h1>My Multi-Language Blog</h1>
          <div>
            {blogPosts.posts
              .filter((p: any) => p.locale === locale)
              .map((blogPost: any, i: any) => {
                return (
                  <div key={i}>
                    <Image
                      src={blogPost.image}
                      alt="image"
                      width={50}
                      height={50}
                    />
                    <p>{blogPost.title}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Language;
