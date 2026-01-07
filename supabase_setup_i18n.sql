-- Add PT columns to Testimonials
alter table testimonials add column if not exists role_pt text;
alter table testimonials add column if not exists content_pt text;

-- Add PT columns to Plans
alter table plans add column if not exists name_pt text;
alter table plans add column if not exists description_pt text;
alter table plans add column if not exists cta_pt text;
alter table plans add column if not exists interval_pt text default 'mês';
alter table plans add column if not exists features_pt text[];

-- Update Sample Data (Testimonials)
update testimonials set 
  role_pt = 'Gestora de Projeto',
  content_pt = 'A Planora simplificou completamente a forma como gerimos projetos em diferentes departamentos. Antes, estávamos constantemente a alternar entre folhas de cálculo, chats e emails. Agora, tudo está organizado num painel claro e fácil de navegar.'
where name = 'Sarah Larson';

-- Update Sample Data (Plans)
update plans set
  name_pt = 'Plano Inicial',
  description_pt = 'Perfeito para pequenas equipas a começar.',
  cta_pt = 'Começar Grátis',
  features_pt = ARRAY['Até 5 membros', '3 projetos máximo', 'Gestão básica de tarefas', 'Vista Kanban', 'Suporte por Email', 'Acesso mobile', '1GB armazenamento']
where name = 'Starter Plan';

update plans set
  name_pt = 'Plano Profissional',
  description_pt = 'Tudo o que equipas em crescimento precisam.',
  cta_pt = 'Teste Grátis 14 Dias',
  features_pt = ARRAY['Membros ilimitados', 'Projetos ilimitados', 'Analytics avançado', 'Todas as vistas', 'Suporte prioriztário', 'Automação', 'Report de Tempo']
where name = 'Professional Plan';

update plans set
  name_pt = 'Plano Enterprise',
  description_pt = 'Funcionalidades avançadas para grandes organizações.',
  cta_pt = 'Contactar Vendas',
  features_pt = ARRAY['Tudo no Profissional', 'Segurança avançada', 'SSO', 'Custom branding', 'Gestor de conta dedicado', 'Acesso API', 'Integrações à medida']
where name = 'Enterprise Plan';
