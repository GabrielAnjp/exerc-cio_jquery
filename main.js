$(document).ready(function() {
    $('#TaskForm').submit(function(e) {
        e.preventDefault();
        var TaskName = $('#TaskInput').val();
        if (TaskName.trim() !== '') {
            $('#TaskList').append('<li>' + TaskName + '<li>');
            $('#TaskInput').val('');
        } else {
            alert('Por Favor, insira o nome da sua tarefa.');
        }
    });
    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});