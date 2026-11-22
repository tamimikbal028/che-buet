const courseMetaModules = import.meta.glob("../courses/*/course.json", {
  eager: true,
});
const teacherMetaModules = import.meta.glob("../courses/*/*/teacher.json", {
  eager: true,
});
const chapterModules = import.meta.glob("../courses/*/*/*.js", {
  eager: true,
});

function slugToLabel(slug) {
  return slug.replace(/^\d+-/, "").replace(/-/g, " ");
}

export function loadCourses() {
  const courseMap = new Map();
  const baseUrl = import.meta.env.BASE_URL || "./";

  const ensureCourse = (courseSlug) => {
    if (!courseMap.has(courseSlug)) {
      const metaKey = `../courses/${courseSlug}/course.json`;
      const meta = courseMetaModules[metaKey]?.default || courseMetaModules[metaKey] || {};
      courseMap.set(courseSlug, {
        slug: courseSlug,
        code: meta.code || courseSlug,
        name: meta.name || slugToLabel(courseSlug),
        order: meta.order ?? 999,
        teachersMap: new Map(),
      });
    }
    return courseMap.get(courseSlug);
  };

  const ensureTeacher = (course, teacherSlug) => {
    if (!course.teachersMap.has(teacherSlug)) {
      const metaKey = `../courses/${course.slug}/${teacherSlug}/teacher.json`;
      const meta = teacherMetaModules[metaKey]?.default || teacherMetaModules[metaKey] || {};
      course.teachersMap.set(teacherSlug, {
        slug: teacherSlug,
        name: meta.name || slugToLabel(teacherSlug),
        short: meta.short || "",
        part: meta.part || "",
        order: meta.order ?? 999,
        chapters: [],
      });
    }
    return course.teachersMap.get(teacherSlug);
  };

  for (const [filePath, mod] of Object.entries(chapterModules)) {
    // Matches: ../courses/<courseSlug>/<teacherSlug>/<chapterSlug>.js
    const match = filePath.match(/^\.\.\/courses\/([^/]+)\/([^/]+)\/([^/]+)\.js$/);
    if (!match) continue;
    const [, courseSlug, teacherSlug, chapterSlug] = match;
    const data = mod.default || mod;
    if (!data || !data.html) continue;

    const course = ensureCourse(courseSlug);
    const teacher = ensureTeacher(course, teacherSlug);

    const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    const slidesBase = `${normalizedBase}slides/${courseSlug}/${teacherSlug}/${chapterSlug}`;

    teacher.chapters.push({
      ...data,
      slug: chapterSlug,
      key: `${courseSlug}/${teacherSlug}/${chapterSlug}`,
      order: data.order ?? (parseInt(chapterSlug, 10) || 999),
      slidesBase,
    });
  }

  return Array.from(courseMap.values())
    .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug))
    .map((course) => ({
      slug: course.slug,
      code: course.code,
      name: course.name,
      order: course.order,
      teachers: Array.from(course.teachersMap.values())
        .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug))
        .map((teacher) => ({
          ...teacher,
          chapters: teacher.chapters.sort(
            (a, b) => a.order - b.order || a.slug.localeCompare(b.slug)
          ),
        })),
    }));
}
