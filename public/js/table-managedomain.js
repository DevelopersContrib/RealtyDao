(function () {})();
$(document).ready(function () {
  $("#domain-list").DataTable({
    columnDefs: [{ orderable: false, targets: 3 }],
  });

  $("#watchlist-tld").DataTable({
    columnDefs: [{ orderable: false, targets: 3 }],
  });
});
