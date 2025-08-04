import { blogPosts, blogCategories } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GlassCard } from "@/components/ui/glass-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  User,
  Tag,
} from "lucide-react";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: any }) {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  const category = blogCategories.find((cat) => cat.id === post.category);
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Back Button */}
      <div className="container mx-auto px-6 pt-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Nazad na blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <Link href={`/blog/kategorija/${category?.id}`}>
              <Badge className="bg-gradient-to-r from-blue-500/20 to-primary/20 text-blue-700 dark:text-blue-300 border-blue-500/30 hover:scale-105 transition-transform">
                <BookOpen className="w-4 h-4 mr-2" />
                {category?.name}
              </Badge>
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString("sr-RS", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  Tagovi:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
              {post.content.split("\n").map((paragraph, index) => {
                if (paragraph.trim() === "") return null;

                // Handle headers
                if (paragraph.startsWith("# ")) {
                  return (
                    <h1
                      key={index}
                      className="text-3xl font-bold mb-6 mt-8 first:mt-0"
                    >
                      {paragraph.replace("# ", "")}
                    </h1>
                  );
                }

                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold mb-4 mt-8 first:mt-0"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }

                if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl font-semibold mb-3 mt-6 first:mt-0"
                    >
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }

                // Handle lists
                if (paragraph.startsWith("- ")) {
                  return (
                    <ul
                      key={index}
                      className="list-disc list-inside mb-4 space-y-1"
                    >
                      <li>{paragraph.replace("- ", "")}</li>
                    </ul>
                  );
                }

                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <p key={index} className="font-semibold mb-4">
                      {paragraph.replace(/\*\*/g, "")}
                    </p>
                  );
                }

                // Regular paragraph
                return (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 mb-16">
            <Separator className="mb-6" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Podelite članak:
                </span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12">Slični članci</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-black hover:bg-white">
                            {
                              blogCategories.find(
                                (cat) => cat.id === relatedPost.category
                              )?.name
                            }
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(
                              relatedPost.publishedAt
                            ).toLocaleDateString("sr-RS")}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {relatedPost.readTime}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-3 text-sm">
                          {relatedPost.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Author Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">O autoru</h3>
                  <p className="text-muted-foreground mb-4">
                    {post.author} je stručnjak u oblasti{" "}
                    {category?.name.toLowerCase()} sa dugogodišnjim iskustvom.
                    Podeli svoje znanje i iskustvo kroz praktične savete i
                    korisne informacije.
                  </p>
                  <Button variant="outline" size="sm">
                    Više o autoru
                  </Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
