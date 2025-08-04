import { blogPosts, blogCategories } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { AccentText } from "@/components/ui/accent-text";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/15 to-orange-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-primary/20 text-blue-700 dark:text-blue-300 border-blue-500/30">
              <BookOpen className="w-4 h-4 mr-2" />
              Blog & Saveti
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <AccentText>Blog</AccentText>
              <br />
              Saveti i inspiracija
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Otkrijte najbolje savete iz sveta zdravlja, lepote i lifestyle-a.
              Autentičan sadržaj koji će vam pomoći da živite bolje.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Kategorije</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogCategories.map((category) => (
              <Link key={category.id} href={`/blog/kategorija/${category.id}`}>
                <GlassCard className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
                  <div
                    className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                  >
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Izdvojeni članci
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative h-64">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-black hover:bg-white">
                          {
                            blogCategories.find(
                              (cat) => cat.id === post.category
                            )?.name
                          }
                        </Badge>
                      </div>
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
                      <CardTitle className="text-xl mb-2 line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <p className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardHeader>
                    <CardContent>
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
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Najnoviji članci
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
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
                        {
                          blogCategories.find((cat) => cat.id === post.category)
                            ?.name
                        }
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString("sr-RS")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-2 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <p className="text-muted-foreground line-clamp-3">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <GlassCard className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Želite da pišete za nas?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ako imate iskustvo u oblasti zdravlja, lepote ili lifestyle-a,
              možete postati deo našeg tima pisaca.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-primary"
            >
              Kontaktirajte nas
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
