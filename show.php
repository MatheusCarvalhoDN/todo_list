<?php
include 'config.php';

$sql = "SELECT * FROM demo";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  while ($row = mysqli_fetch_assoc($result)) {
    $id = $row['id'];
    $txt = $row['txt'];
    ?>

    <li>
      <p><?php echo $txt; ?></p>
      <div class="button-group">
        <button class="edit" data-id="<?php echo $id; ?>"><i class="fa fa-pencil"></i></button>
        <button class="delete" data-id="<?php echo $id; ?>"><i class="fa fa-trash"></i></button>
      </div>
    </li>

    <?php
  }
} else {
  echo "<div style='text-align:center;'>Opa! Você não tem tarefas no momento.</div>";
}
?>
