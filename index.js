var express = require("express");

var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(5000);
var pg = require("pg");
var config = {
  user: "postgres",
  database: "cuukiemchivuong",
  password: "postgres",
  host: "localhost",
  port: "5432",
  max: "10",
  idleTimeoutMillis: 30000,
};
var pool = new pg.Pool(config);
app.get("/", function (req, res) {
  pool.connect(function (err, client, done) {
    if (err) {
      return console.error("error fetching client from pool", err);
    }
    client.query("select * from event", function (err, result) {
      done();

      if (err) {
        res.end();
        return console.error("error runging query", err);
      }
      res.render("home", { data: result });
    });
  });
});
app.get("/event", function (req, res) {
  pool.connect(function (err, client, done) {
    if (err) {
      return console.error("error fetching client from pool", err);
    }
    client.query("select * from event", function (err, result) {
      done();

      if (err) {
        res.end();
        return console.error("error runging query", err);
      }
      res.render("event", { data: result });
    });
  });
});
app.get("/event/admin", function (req, res) {
  pool.connect(function (err, client, done) {
    if (err) {
      return console.error("error fetching client from pool", err);
    }
    client.query("select * from event", function (err, result) {
      done();

      if (err) {
        res.end();
        return console.error("error runging query", err);
      }
      res.render("admin", { data: result });
    });
  });
});
app.get("/event/bangphai", function (req, res) {
  pool.connect(function (err, client, done) {
    if (err) {
      return console.error("error fetching client from pool", err);
    }
    client.query("select * from bangphai", function (err, result) {
      done();

      if (err) {
        res.end();
        return console.error("error runging query", err);
      }
      res.render("bangphai", { data: result });
    });
  });
});

app.get("/delete/:id", function (req, res) {
  pool.connect(function (err, client, done) {
    if (err) {
      return console.error("error fetching client from pool", err);
    }
    client.query(
      "delete from event where id =" + req.params.id,
      function (err, result) {
        done();

        if (err) {
          res.end();
          return console.error("error runging query", err);
        }
        res.redirect("/event/admin");
      });
  });
});

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage }).single("uploadfile");

app.post("/add", urlencodedParser, function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      res.send("lỗi");
    } else {
      if (req.file == undefined) {
        res.send("file chưa đc chọn");
      } else {


        pool.connect(function (err, client, done) {
          if (err) {
            return console.error("error fetching client from pool", err);
          }
          var sql ="insert into event(tieude, mota,noidung, image ) values ('"+req.body.tieude+"', '"+req.body.mota+"','"+req.body.noidung+"', '"+req.file.originalname+"')";
          client.query(sql,function (err, result) {
              done();
              if (err) {
                res.end();
                return console.error("error runging query", err);
              }
              res.redirect("/event/admin");
            });
        });


      }
    }
  });
});
app.post("/video/edit/:id", function (req, res) {
  var id = req.params.id;
  pool.connect(function (err, client, done) {
    if (err) {
      return console.error("error fetching client from pool", err);
    }
    client.query('SELECT * FROM event WHERE id='+id,function (err, result) {
        done();
        if (err) {
          res.end();
          return console.error("error runging query", err);
        }
        res.redirect("edit",{data:result.rows[0]});
      });
  });
});

app.get("/add", function (req, res) {
  res.render("add");
});
app.get("/edit", function (req, res) {
  res.render("edit");
});
app.get("/event", function (req, res) {
  res.render("event");
});
app.get("/login", function (req, res) {
  res.render("login");
});
app.get("/contentevent/:id", function (req, res) {
  var item = {'noidung':'abc'};
  console.log(req.params.id);

  pool.connect(function (err, client, done) {
    if (err) {
      return console.error("error fetching client from pool", err);
    }
    client.query('SELECT * FROM event WHERE id='+req.params.id + ' limit 1',function (err, result) {
        done();
        if (err) {
          res.end();
          return console.error("error runging query", err);
        }
       
        res.render("contentevent",{item:result.rows[0]});
      });
  });
});
