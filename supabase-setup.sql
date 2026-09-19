-- =============================================================================
-- إعداد قاعدة بيانات Supabase لموقع "نظام توثيق الأداء"
--
-- ============================== خطوات التركيب ==============================
-- 1) افتحي https://supabase.com وأنشئي حساب (مجاني)، ثم أنشئي مشروع جديد
--    (New project) — اختاري اسم وكلمة مرور لقاعدة البيانات (احفظيها باحتياط).
--    انتظري دقيقة أو اثنتين حتى يجهز المشروع.
--
-- 2) من القائمة الجانبية اليسرى: اضغطي أيقونة "SQL Editor".
--
-- 3) اضغطي "New query"، الصقي محتوى هذا الملف بالكامل بالمحرر، واضغطي "Run"
--    (أو Ctrl+Enter). هذا ينشئ كل الجداول دفعة واحدة ببيانات تجريبية.
--
-- 4) من القائمة الجانبية: اضغطي أيقونة الترس ⚙️ (Project Settings) ← "API".
--    خذي القيمتين التاليتين:
--      - "Project URL"   (شكلها: https://xxxxxxxxxxxx.supabase.co)
--      - "anon public"   (مفتاح طويل تحت "Project API keys")
--
-- 5) الصقي القيمتين بملف script.js بالسطرين:
--      const SUPABASE_URL = "";
--      const SUPABASE_ANON_KEY = "";
--
-- ملاحظة أمان: هذا التصميم يعتمد على تسجيل الدخول داخل الموقع نفسه (بالاسم
-- وكلمة المرور)، تمامًا مثل نظام جوجل شيت السابق — "anon key" هذا مصمم من
-- Supabase ليكون قابلاً للنشر بكود الموقع نفسه، وهذا هو الاستخدام الطبيعي له.
-- =============================================================================

create table if not exists units (
  id text primary key,
  name text not null,
  password text,
  role text default 'unit',
  department_id text default '',
  status text default 'active',
  created_at bigint
);

create table if not exists departments (
  id text primary key,
  name text not null,
  password text default '',
  status text default 'active',
  created_at bigint
);

create table if not exists indicator_definitions (
  id text primary key,
  name text not null,
  category text default '',
  direction text default '',
  nature text default '',
  frequency text default '',
  unit text default '',
  target text default '',
  data_source text default '',
  calculation_method text default ''
);

create table if not exists goals_definitions (
  id text primary key,
  name text not null,
  kind text not null -- 'strategic' or 'operational'
);

-- تقرير واحد بكل صفوفه — الأقسام الـ15 كلها تُخزَّن هنا كعمود JSON واحد
-- (jsonb)، بدون الحاجة لتقسيمها كل قسم لحاله كما فعلنا مع جوجل شيت، لأن
-- Supabase لا يفرض حدًا على حجم البيانات المرسلة بكل طلب.
create table if not exists reports (
  id text primary key,
  unit_id text not null,
  label text default '',
  status text default 'draft',
  created_at bigint,
  updated_at bigint,
  shared jsonb default '{}'::jsonb,
  indicator_history jsonb default '{}'::jsonb,
  sections jsonb default '{}'::jsonb
);

create index if not exists reports_unit_id_idx on reports (unit_id);

-- تعطيل RLS (التحكم بالوصول على مستوى الصفوف) — الموقع نفسه يتحكم بمن يشوف
-- ماذا عبر نظام تسجيل الدخول الخاص فيه، بنفس أسلوب الأمان المستخدم سابقًا
-- مع جوجل شيت (وصول عام على مستوى قاعدة البيانات، تحكم على مستوى التطبيق).
alter table units disable row level security;
alter table departments disable row level security;
alter table indicator_definitions disable row level security;
alter table goals_definitions disable row level security;
alter table reports disable row level security;

-- بيانات تجريبية أولية (تُدرج فقط إذا كانت الجداول فارغة، لتفادي التكرار
-- لو شغّلتِ هذا السكربت أكثر من مرة بالغلط):
insert into units (id, name, password, role, department_id, status, created_at)
select 'admin-1', 'مديرة النظام', 'admin123', 'admin', '', 'active', extract(epoch from now()) * 1000
where not exists (select 1 from units where id = 'admin-1');

insert into units (id, name, password, role, department_id, status, created_at)
select 'seed-1', 'وحدة الاختبارات', '1234', 'unit', 'dept-2', 'active', extract(epoch from now()) * 1000
where not exists (select 1 from units where id = 'seed-1');

insert into departments (id, name, password, status, created_at)
select 'dept-1', 'المراكز', '9999', 'active', extract(epoch from now()) * 1000
where not exists (select 1 from departments where id = 'dept-1');

insert into departments (id, name, password, status, created_at)
select 'dept-2', 'قسم شؤون المكاتب', '1234', 'active', extract(epoch from now()) * 1000
where not exists (select 1 from departments where id = 'dept-2');
