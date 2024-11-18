CREATE TABLE IF NOT EXISTS "BB_Consulta" (
	"id" serial PRIMARY KEY NOT NULL,
	"horario" timestamp DEFAULT now() NOT NULL,
	"resultado" varchar(7) NOT NULL,
	"tempo_resposta" numeric(6, 2) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Banrisul_Consulta" (
	"id" serial PRIMARY KEY NOT NULL,
	"horario" timestamp DEFAULT now() NOT NULL,
	"resultado" varchar(7) NOT NULL,
	"tempo_resposta" numeric(6, 2) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Caixa_Consulta" (
	"id" serial PRIMARY KEY NOT NULL,
	"horario" timestamp DEFAULT now() NOT NULL,
	"resultado" varchar(7) NOT NULL,
	"tempo_resposta" numeric(6, 2) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Inter_Consulta" (
	"id" serial PRIMARY KEY NOT NULL,
	"horario" timestamp DEFAULT now() NOT NULL,
	"resultado" varchar(7) NOT NULL,
	"tempo_resposta" numeric(6, 2) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Itau_Consulta" (
	"id" serial PRIMARY KEY NOT NULL,
	"horario" timestamp DEFAULT now() NOT NULL,
	"resultado" varchar(7) NOT NULL,
	"tempo_resposta" numeric(6, 2) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Santander_Consulta" (
	"id" serial PRIMARY KEY NOT NULL,
	"horario" timestamp DEFAULT now() NOT NULL,
	"resultado" varchar(7) NOT NULL,
	"tempo_resposta" numeric(6, 2) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Sicoob_Consulta" (
	"id" serial PRIMARY KEY NOT NULL,
	"horario" timestamp DEFAULT now() NOT NULL,
	"resultado" varchar(7) NOT NULL,
	"tempo_resposta" numeric(6, 2) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Sicredi_Consulta" (
	"id" serial PRIMARY KEY NOT NULL,
	"horario" timestamp DEFAULT now() NOT NULL,
	"resultado" varchar(7) NOT NULL,
	"tempo_resposta" numeric(6, 2) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
