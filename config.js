// ============================================================
//  ⚙️  AboElfadl Store — إعدادات GitHub API
//  ✏️  اكتب بياناتك هنا قبل رفع المشروع على GitHub
// ============================================================

const GITHUB_CONFIG = {
  // 👤 اسم المستخدم على GitHub
  // مثال: "aboelfadl"
  USERNAME: "iphone011012013-maker",

  // 📦 اسم الـ Repository
  // مثال: "aboelfadl-store"
  REPO: "aboelfadl-store",

  // 🌿 اسم الـ Branch الرئيسي
  // الافتراضي عادةً "main" أو "master"
  BRANCH: "main",

  // 🔑 GitHub Personal Access Token
  // كيفية إنشاءه:
  //   1. اذهب إلى: https://github.com/settings/tokens/new
  //   2. اختار "repo" من الصلاحيات
  //   3. اضغط "Generate token"
  //   4. الصق التوكن هنا
  // ⚠️ تحذير: لا تشاركه مع أحد!
  TOKEN: "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",
};

// ============================================================
//  🖼️  إعدادات Cloudinary لرفع الصور (اختياري)
//  لو مش هتستخدم Cloudinary، اتركها فاضية
// ============================================================

const CLOUDINARY_CONFIG = {
  // اسم الـ Cloud
  // مثال: "aboelfadl"
  CLOUD_NAME: "YOUR_CLOUDINARY_CLOUD_NAME",

  // Upload Preset (unsigned)
  // إنشاؤه من: Cloudinary Dashboard → Settings → Upload → Upload Presets
  UPLOAD_PRESET: "YOUR_UPLOAD_PRESET",
};

// ============================================================
//  🔐  بيانات الأدمن
//  غيّر كلمة السر قبل النشر!
// ============================================================

const ADMIN_CONFIG = {
  USERNAME: "admin",
  // ✏️ غيّر كلمة السر هنا
  PASSWORD: "admin123",
};

// ============================================================
//  لا تعدّل ما تحت هذا السطر
// ============================================================

const GITHUB_API_BASE = `https://api.github.com/repos/${GITHUB_CONFIG.USERNAME}/${GITHUB_CONFIG.REPO}`;
const PRODUCTS_FILE_PATH = "products.json";
