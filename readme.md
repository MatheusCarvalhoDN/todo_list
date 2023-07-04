Para executar o código,siga as etapas abaixo:

1. Certifique-se de ter um ambiente de desenvolvimento configurado. Você precisará de um servidor web com suporte a PHP e um banco de dados MySQL. Se você não tiver um ambiente configurado, você pode usar ferramentas como XAMPP, WAMP ou MAMP, que fornecem um servidor web local com suporte a PHP e MySQL.

2. Baixe todos os arquivos fornecidos, incluindo os arquivos PHP (`config.php`, `delete.php`, `edit.php`, `insert.php`, `show.php`, `task.php`), o arquivo SQL (`todo_list.sql`), o arquivo JavaScript (`script.js`) e o arquivo CSS (`style.css`).

3. Inicie o servidor web local e certifique-se de que o servidor esteja em execução corretamente. Verifique se você pode acessar o servidor local através do navegador.

4. Importe o arquivo SQL (`todo_list.sql`) para criar o banco de dados e a tabela necessários. Você pode fazer isso usando uma ferramenta de gerenciamento de banco de dados, como o phpMyAdmin. Siga as etapas abaixo para importar o arquivo SQL usando o phpMyAdmin:

   - Abra o navegador e acesse o phpMyAdmin. Se você estiver executando o servidor web localmente na porta padrão, você pode acessar o phpMyAdmin digitando `http://localhost/phpmyadmin` na barra de endereços do navegador.
   - Faça login no phpMyAdmin usando suas credenciais.
   - Crie um novo banco de dados com o nome `todo_list`.
   - Selecione o banco de dados `todo_list` na barra lateral esquerda.
   - Clique na guia "Importar" na parte superior da página.
   - Na seção "Arquivo para importar", clique no botão "Escolher arquivo" e selecione o arquivo SQL (`todo_list.sql`) que você baixou anteriormente.
   - Clique no botão "Executar" para importar o arquivo SQL e criar a estrutura da tabela `demo` com as colunas `id` e `txt`.

5. Abra o arquivo `config.php` no editor de texto de sua preferência. Verifique se as configurações de conexão ao banco de dados estão corretas. Por padrão, o arquivo já está configurado com as seguintes configurações:

   ```php
   $conn = mysqli_connect("localhost", "root", "", "todo_list") or exit("Connection Failed.");
   ```

   Se você estiver usando um nome de usuário ou senha diferentes para o banco de dados MySQL, ou se o banco de dados estiver em um host diferente, você precisará atualizar essas informações no arquivo `config.php`.

6. Mova todos os arquivos baixados para o diretório raiz do servidor web. Se você estiver usando o XAMPP, por exemplo, esse diretório pode ser `htdocs` (no Windows) ou `~/Sites` (no macOS).

7. Abra o navegador e acesse o servidor local. Se você estiver executando o servidor web localmente na porta padrão, você pode acessar o site digitando `http://localhost` na barra de endereços do navegador.

8. Nave

gue até o diretório onde você colocou os arquivos. Por exemplo, se você colocou os arquivos na pasta `htdocs/todo-list`, acesse `http://localhost/todo-list`.

9. Agora você verá a aplicação Todo List em ação. Você pode adicionar novas tarefas usando o campo de entrada de texto e o botão "Adicionar". As tarefas serão exibidas na lista abaixo. Você pode editar ou excluir as tarefas usando os botões correspondentes.

Certifique-se de ter configurado corretamente seu ambiente de desenvolvimento, de seguir as etapas acima para configurar o banco de dados e de atualizar as informações de conexão no arquivo `config.php`. Em seguida, siga as etapas restantes para executar o código corretamente.
