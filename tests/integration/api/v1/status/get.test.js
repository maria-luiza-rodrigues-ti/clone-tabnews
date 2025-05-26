test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const updatedAtParsed = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toBe(updatedAtParsed);

  expect(responseBody.dependencies.version).toEqual("16.0");
  expect(responseBody.dependencies.max_connections).toEqual(100);
  expect(responseBody.dependencies.opened_connections).toEqual(1);
});
