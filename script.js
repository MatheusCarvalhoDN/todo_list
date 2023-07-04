$(document).ready(function(){
  function showData() {
    $.ajax ({
      url: 'show.php',
      type: 'post',
      success: function(result){
        $("#data").html(result);
      }
    });
  }
  showData();

  function totalTask() {
    $.ajax ({
      url: 'task.php',
      type: 'post',
      success: function(result){
        $("#total_task").html(result);
      }
    });
  }
  totalTask();

  $("#btn").on("click", function(e){
    e.preventDefault();
    txt = $("#txt").val();

    $.ajax({
      url: 'insert.php',
      type: 'post',
      data: {txt: txt},
      success: function(result){
        if (result == 1) {
          $("#txt").val('');
          alert("Tarefa adicionada com sucesso.");
          showData();
          totalTask();
        }else {
          console.log(result);
        }
      }
    });
  });

  $(document).on("click", ".delete", function(){
    var id = $(this).data("id");
    var element = $(this);

    $.ajax({
      url: 'delete.php',
      type: 'post',
      data: {id: id},
      success: function(result) {
        if (result == 1) {
          $(element).closest("li").fadeOut();
          showData();
          totalTask();
        }
      }
    });
  });

  $(document).on("click", ".edit", function(){
    var id = $(this).data("id");
    var description = $(this).siblings("p").text();
    var newDescription = prompt("Editar descrição da tarefa:", description);

    if (newDescription != null) {
      $.ajax({
        url: 'edit.php',
        type: 'post',
        data: {id: id, txt: newDescription},
        success: function(result) {
          if (result == 1) {
            showData();
            totalTask();
          }
        }
      });
    }
  });

  $(document).on("click", "#clear", function(){
    $.ajax({
      url: 'clear.php',
      type: 'post',
      success: function(result) {
        if (result == 1) {
          showData();
          totalTask();
        }
      }
    });
  });
});
