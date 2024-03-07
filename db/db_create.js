const db = require("./db_connection")
//Drop any existing tables
const drop_content_table_sql = "drop table if exists content";
// Execute the query
db.execute (drop_content_table_sql);

const drop_comment_table_sql = "drop table if exists comment";
db.execute (drop_comment_table_sql);

const set_foriegn_key_checks = `SET foreign_key_checks = 0`;
db.execute (set_foriegn_key_checks);

//Create the subject table
const create_content_table_sql = `CREATE TABLE content (
    contentId INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(100) NOT NULL,
    PRIMARY KEY (contentId))
    ENGINE = InnoDB;`;

db.execute(create_content_table_sql)


//Create the assignments table
const create_comment_table_sql = `CREATE TABLE comment(
    commentID INT NOT NULL AUTO_INCREMENT,
    text VARCHAR(100) NOT NULL,
    KEY (comment_contentID),
    PRIMARY KEY (commentID),
    comment_contentID VARCHAR (100) NOT NULL,
    CONSTRAINT fk_contentComment
      FOREIGN KEY (comment_contentID) 
      REFERENCES content (contentID)
      ON DELETE RESTRICT
      ON UPDATE CASCADE)
    ENGINE = InnoDB;`;
db.execute(create_comment_table_sql)

const create_reply_table_sql = `CREATE TABLE reply(
    replyID INT NOT NULL AUTO_INCREMENT,
    replies VARCHAR(100) NOT NULL,
    PRIMARY KEY (replyID),
    reply_commentID VARCHAR (100) NOT NULL,
    KEY (reply_commentID),
    CONSTRAINT commentReply
      FOREIGN KEY (reply_commentID) 
      REFERENCES comment (commentID)
      ON DELETE RESTRICT
      ON UPDATE CASCADE)
    ENGINE = InnoDB;`;
db.execute(create_reply_table_sql)


db.end();