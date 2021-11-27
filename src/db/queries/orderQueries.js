const seedOrdersTableQuery = `
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('2f369959-f0ba-48f8-af67-a98491e59fb1', '4f9b080d-b635-4b97-87ee-4ae4bff22543', '2020-07-14', 758.55, '2020-07-14', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('0f25d42f-505a-402d-bcaa-ace38a1e7cc1', '4a89ce53-c4f4-41a2-ba58-b0ae28940192', '2020-11-02', 1169.42, '2020-11-02', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('ffff6ba5-0fb1-4d16-9542-eb5bbff746dc', 'd059379a-243c-4710-ba32-3ef17e53ac44', '2021-05-30', 638.31, '2021-05-30', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('861a2ca7-c7cf-4b8f-8464-b30c8aaccdc1', '20679b4c-9218-4d6c-a231-17c5f61abc73', '2020-08-05', 781.13, '2020-08-05', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('3c19c375-8648-414c-a34b-8cc8136b3b7c', '7c0ed405-31ae-4642-99c4-1b0649410790', '2020-06-25', 590.91, '2020-06-25', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('f7a119d1-9a39-42c2-b50e-2caccef7cb5c', '20b24071-7af8-451a-9db3-070b43f755d4', '2020-07-18', 145.02, '2020-07-18', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('e5d591ff-9132-41a5-810a-f008ba2bb4e8', 'b6cd9254-d67f-4690-8b77-5fef7649e9ee', '2021-06-12', 1451.19, '2021-06-12', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('4ffab6d7-a7bd-4663-b512-c4ccf476895e', '1f7c11c1-e286-4fd0-b7af-99be45a2d389', '2020-09-23', 449.91, '2020-09-23', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('a0a09c82-5de0-494a-bab7-df1808fa8123', '24593e6c-ead8-44d1-a136-0f0bf07a9ec3', '2021-06-18', 7.78, '2021-06-18', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('b5e60db3-f4c0-4376-bdaf-6f387ed9b61b', '3bb4fbd0-2492-4ade-83a4-e728e23a7f4c', '2020-11-06', 230.92, '2020-11-06', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('155a5ca7-56b6-4162-82ac-3f0a0af24d4e', '5d3bff24-eeb2-443b-b485-f3ee0eb3f92d', '2020-12-22', 470.37, '2020-12-22', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('81d4fa05-b256-4a7e-a7e5-d1a75445ca7e', '20b24071-7af8-451a-9db3-070b43f755d4', '2020-09-05', 392.5, '2020-09-05', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('bf05bc60-5b48-4d00-9916-f8688f2edbbf', '85e366c4-c5fc-45b7-aead-3dc7216f22ff', '2021-03-24', 607.79, '2021-03-24', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('ca3c1731-9c58-4469-821f-e199b29aee16', '8d602f4d-a4f9-4391-abd5-b2932cc84924', '2020-06-24', 874.82, '2020-06-24', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('f4186f93-3e51-4334-90ee-8873488f8068', 'c7de92c1-15ae-4341-b390-03cfb76d38a7', '2020-11-14', 1326.99, '2020-11-14', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('6fe41ff3-ea77-4bd8-9a70-39267d682c55', 'f8fddec1-8cb1-4b46-84e0-1da2f31be496', '2021-04-09', 1228.08, '2021-04-09', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('c5305ace-9b87-404f-a513-49ed517e9469', '4a9db7dd-0797-4f7e-b5d8-4ff8744e25f7', '2020-07-15', 127.35, '2020-07-15', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('6a4aa47e-f2e4-4838-a82c-f600f01aa220', '8997d419-943b-4f84-ae26-c59ba09300a6', '2020-10-27', 1122.22, '2020-10-27', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('6e66fb0d-6596-4bfe-b2d9-1315acd80c7e', '6dbb552c-04b1-458e-a603-3668e000c427', '2020-07-02', 690.37, '2020-07-02', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('fe5dc4b0-f3c4-4c0b-889d-4a8c6d965db4', '50b3a1b6-d2e2-412e-8396-29b75cf401a2', '2021-06-09', 731.42, '2021-06-09', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('8583011f-d029-4e1d-8396-ddf2658aa459', 'b2ed9833-8080-425c-b23e-a42ad11308c1', '2021-06-20', 949.72, '2021-06-20', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('a4764905-9795-462c-92cd-222f2ee21ca6', 'e8bf1cc4-854d-438e-86d2-23fb23f2ef6e', '2020-11-06', 1150.62, '2020-11-06', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('8e36238b-8869-4786-8e92-507a00b7dd20', 'd0f2b6dc-3138-4bf5-a8e5-6f5cda0385f0', '2021-03-06', 1134.43, '2021-03-06', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('efb26213-c177-4d06-8b7d-207ffd993eb9', 'f8fddec1-8cb1-4b46-84e0-1da2f31be496', '2021-04-15', 304.13, '2021-04-15', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('b2c127b0-6857-41f5-ba3e-ff9df458f90f', 'adca9107-2320-450a-bccd-bf69a6f9e8dd', '2021-04-19', 403.65, '2021-04-19', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('9a0eec16-4048-41cb-a1a5-ee18802da68b', '4f9b080d-b635-4b97-87ee-4ae4bff22543', '2021-05-16', 1252.78, '2021-05-16', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('f7f37f7b-0696-444f-8877-45c6ebeb6021', '4eb41b88-ca5f-4686-99c9-dd1d183862f5', '2021-01-10', 1226.01, '2021-01-10', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('81b045d5-c42b-454e-8083-6e13d9018dd7', '1f7c11c1-e286-4fd0-b7af-99be45a2d389', '2021-01-07', 171.54, '2021-01-07', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('a0524347-ebef-4bce-95fb-a5ddf9739bf5', '4a9db7dd-0797-4f7e-b5d8-4ff8744e25f7', '2021-04-19', 634.49, '2021-04-19', NOW() );
    insert into orders (order_id, user_id, order_date, total_price, created_at, updated_at) values ('a8522dd9-f178-42e3-b4d8-617736c4e966', 'f8fddec1-8cb1-4b46-84e0-1da2f31be496', '2020-09-23', 659.21, '2020-09-23', NOW() );`;

const dropOrdersTableQuery = 'DROP TABLE IF EXISTS orders;';

module.exports = { seedOrdersTableQuery, dropOrdersTableQuery };
