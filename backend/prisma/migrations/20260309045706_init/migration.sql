-- CreateTable
CREATE TABLE `tb_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `google_uid` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,

    UNIQUE INDEX `tb_user_google_uid_key`(`google_uid`),
    UNIQUE INDEX `tb_user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_detail_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `bio` VARCHAR(191) NULL,

    UNIQUE INDEX `tb_detail_user_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_detail_user` ADD CONSTRAINT `tb_detail_user_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `tb_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
