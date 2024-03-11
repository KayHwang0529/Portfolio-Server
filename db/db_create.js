const db = require("./db_connection")
//Drop any existing tables
const drop_content_table_sql = "drop table if exists content";
// Execute the query
db.execute (drop_content_table_sql);

const drop_comment_table_sql = "drop table if exists comment";
db.execute (drop_comment_table_sql);

const set_foriegn_key_checks = `SET foreign_key_checks = 0`;
db.execute (set_foriegn_key_checks);


//Create the assignments table
const create_comment_table_sql = `CREATE TABLE web_apps_project_2324t2_TF_kayhwa.comment (
  comment_id INT NOT NULL AUTO_INCREMENT,
  comment_desc VARCHAR(45) NOT NULL,
  PRIMARY KEY (comment_id);`
db.execute(create_comment_table_sql)

const create_reply_table_sql = `CREATE TABLE web_apps_project_2324t2_TF_kayhwa.reply (
  reply_id INT NOT NULL AUTO_INCREMENT,
  replies VARCHAR(45) NOT NULL,
  reply_comment_id INT NOT NULL,
  PRIMARY KEY (reply_id),
  INDEX reply_comment_id_idx (reply_comment_id ASC),
  CONSTRAINT reply_comment_id
    FOREIGN KEY (reply_comment_id)
    REFERENCES web_apps_project_2324t2_TF_kayhwa.comment (comment_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);`

db.execute(create_reply_table_sql)


db.end();