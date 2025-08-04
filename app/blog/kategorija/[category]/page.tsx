import { blogPosts, blogCategories } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { AccentText } from "@/components/ui/accent-text";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = blogCategories.find((cat) => cat.id === params.category);

  if (!category) {
    notFound();
  }

  const categoryPosts = blogPosts.filter(
    (post) => post.category === params.category
  );

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

      {/* Category Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/15 to-orange-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className={`mb-6 ${category.color} text-white border-0`}>
              <BookOpen className="w-4 h-4 mr-2" />
              {category.name}
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <AccentText>{category.name}</AccentText>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {category.description}
            </p>

            <div className="text-center">
              <span className="text-2xl font-bold text-primary">
                {categoryPosts.length} članaka
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {categoryPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                Nema članaka u ovoj kategoriji
              </h2>
              <p className="text-muted-foreground mb-8">
                Trenutno nema objavljenih članaka u kategoriji "{category.name}
                ".
              </p>
              <Link href="/blog">
                <Button>Vratite se na blog</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-black hover:bg-white">
                          {category.name}
                        </Badge>
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-yellow-500 text-white">
                            Izdvojeno
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishedAt).toLocaleDateString(
                            "sr-RS"
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg mb-2 line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <p className="text-muted-foreground line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Autor: {post.author}
                        </span>
                        <Button variant="ghost" size="sm">
                          Čitaj više <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Istražite druge kategorije
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogCategories
              .filter((cat) => cat.id !== params.category)
              .map((cat) => (
                <Link key={cat.id} href={`/blog/kategorija/${cat.id}`}>
                  <GlassCard className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
                    <div
                      className={`w-16 h-16 ${cat.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                    >
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {cat.description}
                    </p>
                    <div className="mt-4 text-sm text-muted-foreground">
                      {
                        blogPosts.filter((post) => post.category === cat.id)
                          .length
                      }{" "}
                      članaka
                    </div>
                  </GlassCard>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <GlassCard className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ostanite u toku</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Prijavite se na newsletter i dobijte najnovije članke iz
              kategorije {category.name} direktno u vašu email poštu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Vaš email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-primary">
                Prijavi se
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
