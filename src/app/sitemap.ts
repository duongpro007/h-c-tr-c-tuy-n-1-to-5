import type { MetadataRoute } from "next";
import { grades, subjects, games } from "@/content/subjects";
import { curriculum } from "@/content/curriculum";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hocmachoi.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/chuong-trinh-hoc", "/tro-choi", "/gioi-thieu", "/lien-he"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const gradeRoutes = grades.map((g) => ({
    url: `${siteUrl}/chuong-trinh-hoc/${g.slug}`,
    lastModified: new Date(),
  }));

  const subjectRoutes = grades.flatMap((g) =>
    subjects.map((s) => ({
      url: `${siteUrl}/chuong-trinh-hoc/${g.slug}/${s.slug}`,
      lastModified: new Date(),
    }))
  );

  const lessonRoutes = curriculum.flatMap((sc) => {
    const grade = grades.find((g) => g.number === sc.grade);
    if (!grade) return [];
    return sc.chapters.flatMap((chapter) =>
      chapter.lessons.map((lesson) => ({
        url: `${siteUrl}/chuong-trinh-hoc/${grade.slug}/${sc.subject}/${lesson.slug}`,
        lastModified: new Date(),
      }))
    );
  });

  const gameRoutes = games.map((g) => ({
    url: `${siteUrl}/tro-choi/${g.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...gradeRoutes, ...subjectRoutes, ...lessonRoutes, ...gameRoutes];
}
