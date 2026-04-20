/**
 * Test: POST /api/auth/login
 */
 testUtils.createTestButton("Test Login (Pepe)", async (btn) => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'pepe', password: '123' }) // Usamos pepe hardcodeado
    });
    
    const data = await response.json();
    testUtils.log(data);

    if (response.ok) {
        // Guardamos el token para los siguientes tests de samples
        localStorage.setItem('test_token', data.token);
        testUtils.setSuccess(btn);
    }
});