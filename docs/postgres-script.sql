CREATE DATABASE postgres
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE TABLE tb_calllogfrm (
  uname varchar(20) NOT NULL,
  phonenumber varchar(20) NOT NULL,
  timeofcall timestamp DEFAULT NULL,
  location varchar(100) DEFAULT NULL,
  assigned_to varchar(50) DEFAULT NULL,
  callpriority int DEFAULT NULL,
  user_id character varying(30),
   call_log_id SERIAL,
  PRIMARY KEY (call_log_id)
);

CREATE TABLE tb_transition (
  transition_id SERIAL,
  stock_id int not null , 
  quantity INT NULL,
  username varchar(30) null, 
  transition_type VARCHAR(20) NULL,
  date timestamp NULL,
  discription VARCHAR(45) NULL,
  PRIMARY KEY (transition_id));

CREATE TABLE tb_stock_inventory (
  stock_id SERIAL,
  stock_name VARCHAR(45) NULL,
  quantity INT NULL,
  PRIMARY KEY (stock_id));
  

CREATE TABLE public.tb_calllogfrm
(
    uname character varying(20) COLLATE pg_catalog."default" NOT NULL,
    phonenumber character varying(20) COLLATE pg_catalog."default" NOT NULL,
    location character varying(100) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    reportedby character varying(50) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    callpriority integer,
    callseverity integer,
    call_log_id integer NOT NULL DEFAULT nextval('tb_calllogfrm_call_log_id_seq'::regclass) ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    timeofcall timestamp without time zone,
    CONSTRAINT tb_calllogfrm_pkey PRIMARY KEY (call_log_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;



CREATE TABLE public.tb_transition
(
    transition_id integer NOT NULL DEFAULT nextval('tb_transition_id_seq'::regclass) ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    stock_id integer NOT NULL,
    quantity integer,
    username character varying(30) COLLATE pg_catalog."default",
    transition_type character varying(20) COLLATE pg_catalog."default",
    date timestamp without time zone,
    discription character varying(45) COLLATE pg_catalog."default",
    CONSTRAINT tb_transition_pkey PRIMARY KEY (transition_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public.tb_stock_inventory
(
    stock_id integer NOT NULL DEFAULT nextval('tb_stock_inventory_id_seq'::regclass) ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    stock_name character varying(45) COLLATE pg_catalog."default",
    quantity integer,
    CONSTRAINT tb_stock_inventory_pkey PRIMARY KEY (stock_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


------------Edited By Naufil tb_calllogfrm----------

CREATE TABLE public.tb_calllogfrm
(
    uname character varying(20) COLLATE pg_catalog."default" NOT NULL,
    phonenumber character varying(20) COLLATE pg_catalog."default" NOT NULL,
    timeofcall timestamp without time zone,
    location character varying(100) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    reportedby character varying(50) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    callpriority integer,
    callseverity integer,
    call_log_id integer NOT NULL DEFAULT nextval('tb_calllogfrm_call_log_id_seq'::regclass) ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    vlan character varying(45) COLLATE pg_catalog."default",
    zone character varying(45) COLLATE pg_catalog."default",
    user_id character varying(30) COLLATE pg_catalog."default",
    CONSTRAINT tb_calllogfrm_pkey PRIMARY KEY (call_log_id)
)
